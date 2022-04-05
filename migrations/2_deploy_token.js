//var MRHBToken = artifacts.require("MRHBToken");
var TokenVesting = artifacts.require("TokenVesting");

module.exports = async function(deployer, network, accounts) {
    // console.log("Deploying MRHBToken contract...");
    // console.log("Network: " + network);
    // console.log("Account: " + accounts[0]);
    
    // await deployer.deploy(MRHBToken, web3.utils.toBN("1000000000000000000000000000"));
    // const mrhbToken = await MRHBToken.deployed();
    // const mrhbOwnerBalance = await mrhbToken.balanceOf(accounts[0]);
    // const mrhbOwner = await mrhbToken.owner();
    // const mrhbTokenAddress = await mrhbToken.address;
    
    // console.log("MRHBTestToken address: " + mrhbTokenAddress);
    // console.log("MRHB balance for " + mrhbOwner + " is: " + web3.utils.fromWei(mrhbOwnerBalance.toString()));

    // Vesting Contract Deployment and Data
    const mrhbTokenAddress = '0xd10332818D6A9B4b84bf5d87DbF9D80012FDF913';
    console.log("Deploying Vesting Contract contract...");
    await deployer.deploy(TokenVesting, mrhbTokenAddress);
    console.log("Vesting Contract address: " + tokenVestingAddress);

    // Transfer balance to Vesting Contract
    //console.log("Transferring MRHB tokens to Vesting Contract...");

    // Transfer total vesting balance to contrct
    //await mrhbToken.transfer(tokenVestingAddress, web3.utils.toBN("389453815101648000000000000"));
    //console.log("Vesting balance transfer complete.");
};