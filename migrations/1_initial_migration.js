const Migrations = artifacts.require("Migrations");

module.exports = function (deployer, accounts) {
  console.log("accounts", accounts[0]);
  deployer.deploy(Migrations);
};
