const {parse} = require('csv-parse/sync');
const fs = require('fs');
const path = require('path');

// Config
process.env.UV_THREADPOOL_SIZE = 256;

// Contracts
const TokenVesting = artifacts.require("TokenVesting");

// CSV file
console.log("Reading CSV file...");
var rawData = fs.readFileSync(path.resolve(__dirname, './../utils', 'AdvisorVestingList.csv'));
const csvData = parse(rawData, {
    columns: true,
    skip_empty_lines: false
});

module.exports = async function(callback) {
    try {
        console.log("Start of Vesting Script");
        const tokenVesting = await TokenVesting.deployed();
        const todayBN = await tokenVesting.today();
        const today = todayBN.toNumber();



            // Add grants
            console.log("CSV file read. " + csvData.length + " records found.");
            console.log("Adding vesting grants...");
                for (let i = 0; i < csvData.length; i++) {   
                    // Prepare vesting data
                    let address = csvData[i].address;
                    let amount = csvData[i].amount;
                    let amountBN = web3.utils.toBN(amount);
                    let amountWei = web3.utils.toWei(amountBN.toString());
                              
                    try {
                        // Create each vesting schedule
                        await tokenVesting.addGrant(
                            address,
                            amountWei,
                            today,
                            1090,
                            244,
                            1,
                            true
                            );
                        
                            // Check vesting schedule
                            let vestingSchedule = await tokenVesting.getGrantInfo(address, today);
                            let scheduleInfo = await tokenVesting.getScheduleInfo(address);
                            let grantAmount = web3.utils.fromWei(vestingSchedule.amountOfGrant) / 10**18;
                            
                            console.log(address + " vesting recorded for " + grantAmount + 
                            " MRHB tokens with start date of " +
                            vestingSchedule.vestStartDay +
                            " over " + scheduleInfo.vestDuration + " days" +
                            " with a cliff period of " + scheduleInfo.cliffDuration + " days." + 
                            " With unlock rate of " + scheduleInfo.vestIntervalDays + " day(s).");

                    } catch (error) {
                        console.log("Error: " + error.message);
                    }
            }
        console.log("Vesting grants added.");
    } catch (error) {
        console.log(error);
    }
	
	callback();
};
