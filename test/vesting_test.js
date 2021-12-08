const TokenVesting = artifacts.require("./TokenVesting");

const token = "0x928b8F4BFa6f04b255F9d16272B3707982b6aad1";
const user = "0x76653ec3bfa34B0cC33440e165D10F198406B8a4";

module.exports = async function (deployer) {
  await deployer.deploy(TokenVesting, token);
  const vesting = await TokenVesting.deployed();
  const todayBN = await vesting.today();
  let today = todayBN.toNumber();

  await vesting.addGrant(
    user,
    "21666667000000000000000000",
    today - 1,
    10,
    0,
    1,
    false
  );

  await vesting.setVestingSchedule(user, 0, 10, 1, true);

  await vesting.revokeGrant(user);
};
