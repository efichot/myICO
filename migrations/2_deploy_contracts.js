var DemoCoinCrowdsale = artifacts.require("./DemoCoinCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  const startBlock = web3.eth.blockNumber + 2 // blockchain block number where the crowdsale will commence. Here i just taking the current block that the contract and setting that crowdsale starts two block after.
  const endBlock = startBlock + 300 // blockchain block number where it will end. 300 is little over an hour
  const rate = new web3.BigNumber(1000) // rate of ether to DemoCoin in wei
  const wallet = web3.eth.accounts[0] // the address that will hold the fund. Recommended to use. Recommended to use multisig one security

  deployer.deploy(DemoCoinCrowdsale, startBlock, endBlock, rate, wallet);
}
