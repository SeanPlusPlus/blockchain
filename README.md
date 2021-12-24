# Blockchain

Simple JS blockchain based on [this tutorial](https://dev.to/freakcdev297/creating-a-blockchain-in-60-lines-of-javascript-5fka)

### Dev

First get the repo

```
git clone git@github.com:SeanPlusPlus/blockchain.git
cd blockchain
```

Then create some blocks on our blockchain 

```
node index.js
```

Update `this.difficulty` in the **Blockchain** class to see how mining works

### Example Output

In the ` while (!this.hash.startsWith(arr))` loop:

The `console.log(arr)` will literally just show `["0", "0", "0", "0"]` here

The `nonce` will keep incrementing

... And a new `this.hash` is generated until one starting with those 4 `0`'s returned

![output](https://i.imgur.com/YYArf1h.png)
