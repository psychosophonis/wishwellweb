/* This is a completely stripped back interface to the Bouncing Wishing Well Contract.
It requires a metamask account running in the chrome browser using a local web server.
If you have npm install try 'install http-server' for a bare bones server. */

// web3 setup

var web3 = new Web3(web3.currentProvider);

// contract and contract instance

var well_abi = JSON.parse('[{"constant":true,"inputs":[],"name":"amountDep","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[{"name":"","type":"uint256"}],"payable":true,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amntdep","type":"uint256"},{"indexed":false,"name":"depositorCount","type":"uint256"},{"indexed":false,"name":"depositorLatest","type":"address"}],"name":"LogRoundOver","type":"event"}]');

var well = web3.eth.contract(well_abi);
var contractAddress = '0xF62735F52Bd8071eBE29f003d6685FA579E955e9';
var wellInstance = well.at(contractAddress);

var amntdep;

window.web3.eth.defaultAccount = web3.eth.accounts[0];

// First event log check.

$(document).ready(function() {

  document.getElementById('walletAdd').value =  web3.eth.defaultAccount;


  var firstEvent = wellInstance.LogRoundOver({_sender: web3.eth.defaultAccount}, {fromBlock: 0, toBlock: 'latest'});
  firstEvent.watch(function(err, result) {
      if (err) {
        console.log(err)
        return;
      }
      console.log("first log return:" + result)
  
      amntdep =  web3.fromWei(result.args.amntdep.toString(10), 'ether');
      document.getElementById('amountDeposited').innerText = "We have thrown "+ amntdep + " Ether into the Wishing Well";
      firstEvent.stopWatching()
  })
})

//listen for and update to the log and report.
// Events/Logs are currently broken in Metamask..
// https://github.com/MetaMask/metamask-extension/issues/2393
// This log/event works via localhost and truffle...

var event= wellInstance.LogRoundOver({fromBlock: 100, toBlock: 'latest'});
  event.watch(function(err, result) {
    if (err) {
      console.log(err)
      return;
      }
    console.log(result.args)
    amntdep =  web3.fromWei(result.args.amntdep.toString(10), 'ether');
    document.getElementById('amountDeposited').innerText = "We have thrown "+ amntdep + " Ether into the Wishing Well";
  
})

//  We no longer need an unlock account function because metamask will handle that.
// The deposit function must now use this callback method.... truffle will handle promises... 
// theses more complex structures (callbacks and promises) are due to the asynchronous nature of interacting with the blockchain.

window.deposit = function() {

  var defaultAddress = document.getElementById('walletAdd').value;
  var amount = document.getElementById('amnt').value;
  
  wellInstance.deposit({from: web3.eth.defaultAccount, value: web3.toWei(amount, "ether"), gas:'3000000'},function(error,result){

    if(!error)
        console.log(result)
    else
        console.error(error);

  })
}







   
       

 






