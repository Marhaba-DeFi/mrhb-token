var MRHBToken = artifacts.require("MRHBToken");

module.exports = async function(deployer, network, accounts) {
    console.log("Deploying MRHBToken contract...");
    console.log("Network: " + network);
    console.log("Accounts: " + accounts[0]);
    
    await deployer.deploy(MRHBToken, web3.utils.toBN("1000000000000000000000000000"));
    const mrhbToken = await MRHBToken.deployed();
    const mrhbOwnerBalance = await mrhbToken.balanceOf(accounts[0]);
    
    console.log("MRHBTestToken address: " + MRHBTestToken.address);
    console.log("MRHB balance for " + mrhbOwnerBalance + " is: " + web3.utils.fromWei(balance.toString()));
};