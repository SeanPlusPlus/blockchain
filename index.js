const { Block, Blockchain } = require("./block.js");

const MyChain = new Blockchain();

const block = {
    from: "John",
    to: "Bob",
    amount: 100,
}

// Add a new block
MyChain.addBlock(new Block(Date.now().toString(), block));

// (This is just a fun example, real cryptocurrencies often have some more steps to implement).

// Prints out the updated chain
console.log(MyChain.chain); 