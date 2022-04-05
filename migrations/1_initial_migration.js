const Migrations = artifacts.require("Migrations");

module.exports = function (deployer, accounts) {
  console.log("Deployer Address: ", accounts[0]);
  deployer.deploy(Migrations);
};
