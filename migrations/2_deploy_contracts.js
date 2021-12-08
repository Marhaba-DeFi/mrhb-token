var MRHBToken = artifacts.require("MRHBToken");

module.exports = async function(deployer, network, accounts) {
    console.log("Deploying MRHBToken contract...");
    console.log("Network: " + network);
    console.log("Account: " + accounts[0]);
    
    await deployer.deploy(MRHBToken, web3.utils.toBN("1000000000000000000000000000"));
    const mrhbToken = await MRHBToken.deployed();
    const mrhbOwnerBalance = await mrhbToken.balanceOf(accounts[0]);
    const mrhbOwner = await mrhbToken.owner();
    
    console.log("MRHBTestToken address: " + mrhbToken.address);
    console.log("MRHB balance for " + mrhbOwner + " is: " + web3.utils.fromWei(mrhbOwnerBalance.toString()));
};