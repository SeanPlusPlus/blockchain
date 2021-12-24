const { Block, Blockchain } = require("./block.js");

const MyChain = new Blockchain();

console.log(MyChain.getLastBlock()); 

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

for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    MyChain.addBlock(new Block(Date.now().toString(), block));
    console.log(MyChain.getLastBlock()); 
}
