## Wishing Well Web - Metamask Hello World

This example strips out all truffle overhead and simplifies interaction with the Bouncing Wishing Well contract.
I have used jquery to allow a readable $document.ready function but stripped out any remaining jquery beyond that.

For this example to work you need to be using the Metamask chrome extension on the Rinkeby test network.
Go to [https://chrome.google.com/webstore/category/extensions](the chrome store) and search for metamask.
Follow the instructions to install metamask and set up a wallet and account.

Now Metamask will handle all your rinkeby accounts (set up a new account for this) and your web3 instance.

You will also have to run this example in a local webserver (this is a security measure of metamask).
If you have npm (node packet manager) installed you can do this by typing 'npm install http-server' in your console.
Then navigate to the folder you would like to serve (where the example is) and type http-server index.html.

The console window will provide you with a localhost address from which you can access the page. 

Event/Log functionality is currently broken with metamask.
This means our values will not update automatically... this is due to be fixed in the next release of metamask.






