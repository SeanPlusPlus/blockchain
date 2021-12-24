const { Block, Blockchain } = require("./block.js");

const MyChain = new Blockchain();

const blocks = [
    {
        from: "Lincoln",
        to: "Washington",
        amount: 100,
    },
    {
        from: "Jefferson",
        to: "Adams",
        amount: 70,
    },
    {
        from: "Obama",
        to: "Roosevelt",
        amount: 105,
    },
]

blocks.forEach((block) => {
  // Add a new block
  MyChain.addBlock(new Block(Date.now().toString(), block));
})

// (This is just a fun example, real cryptocurrencies often have some more steps to implement).

// Prints out the updated chain
console.log(MyChain.chain); 