## Wishing Well Web - Metamask Hello World

This example strips out all truffle overhead and simplifies interaction with the Bouncing Wishing Well contract.
I have used jquery to allow a readable $document.ready function but stripped out any remaining jquery beyond that.

For this example to work you need to be using the Metamask chrome extension (in the chrome browser) on the Rinkeby test network.

While using the chrome browser go to [the chrome store](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) and follow the install instructions.

Click on the metamask icon (the fox) in chrome to set up a wallet and account.
You may need to use the Rinkeby faucet to get some rinkeby ether.

Now Metamask will handle all your rinkeby accounts (set up a new account for this) and your web3 instance.

You will also have to run this example in a local webserver (this is a security measure of metamask).
If you have npm (node packet manager) installed you can do install this functionality by typing 'npm install http-server' in your console.

Then navigate to the folder you would like to serve (where the example is) and type 'http-server index.html' .

The console window will provide you with a localhost address from which you can access the page. 

Event/Log functionality is currently broken with metamask.
This means our values will not update automatically... this is due to be fixed in the next release of metamask.






