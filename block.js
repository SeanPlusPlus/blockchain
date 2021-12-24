const crypto = require("crypto");
const SHA256 = (message) => {
    return (
        crypto.createHash("sha256").update(message).digest("hex")
    );
}

class Block {
    constructor(timestamp = "", data = []) {
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.getHash();
        this.prevHash = ""; // previous block's hash
        this.nonce = 0;
    }

    // Our hash function.
    getHash() {
        const h = this.prevHash + this.timestamp + JSON.stringify(this.data) + this.nonce;
        return SHA256(h);
    }

    mine(difficulty) {
        // Basically, it loops until our hash starts with 
        // the string 0...000 with length of <difficulty>.
        var arr = Array(difficulty + 1).join("0");
        // console.log(arr);
        while (!this.hash.startsWith(arr)) {
            // We increases our nonce so that we can get a whole different hash.
            this.nonce++;
            // Update our new hash with the new nonce value.
            this.hash = this.getHash();
            // console.log(this.hash);
        }
    }
}

class Blockchain {
    constructor() {
        // Create our genesis block
        this.chain = [new Block(Date.now().toString(), { genesis: true })];
        this.difficulty = 3;
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(block) {
        block.prevHash = this.getLastBlock().hash;
        block.hash = block.getHash();
        block.mine(this.difficulty);
        this.chain.push(Object.freeze(block));
    }
}

module.exports = { Block, Blockchain };
