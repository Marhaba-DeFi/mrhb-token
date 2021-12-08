var MRHBToken = artifacts.require("MRHBToken");

module.exports = async function(deployer, network, accounts) {
    console.log("Deploying MRHBToken contract...");
    console.log("Network: " + network);
    console.log("Accounts: " + accounts[0]);
    
    await deployer.deploy(MRHBToken, web3.utils.toBN("1000000000000000000000000000"));
    const MRHBTestToken = await MRHBToken.deployed(MRHBToken).toString();
    
    console.log("MRHBTestToken address: " + MRHBTestToken.address);
};