const Web3 = require('web3')
// const web3 = new Web3('https://ropsten.infura.io/v3/b749c4bd55514bd396e07a1e6f188670')
const web3 = new Web3('https://ropsten.infura.io/v3/b749c4bd55514bd396e07a1e6f188670')
var Tx = require("ethereumjs-tx").Transaction;



const account1 = '0x392061C50A9c623E47042CA9F1F13dB5d3AC5a93' // Your account address 1
const account2 = '0xaa86Ce4ee0EDc9F1201338E58821Aa51925b674D' // Your account address 2

const privateKey1 = Buffer.from('965eb21d74e8167a7836644da366f6ac85cc7ce529eaf22cc6b92654051b17bd', 'hex')
const privateKey2 = Buffer.from('c83b3bc8a93dc6b148b713d9f1bead1f5c7027acb77e9058c745db70ecfe61bc', 'hex')
function myfev() {
    console.log("hello");
}
function(account, key, prize) {
    // web3.eth.getTransactionCount(account2, (err, txCount) => {
    // Build the transaction
    const txObject = {
        nonce: 0x00,
        to: account,
        value: web3.utils.toHex(web3.utils.toWei(prize, 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }


    // Sign the transaction
    const tx = new Tx(txObject, { chain: 'ropsten', hardfork: 'petersburg' })
    tx.sign(Key)

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {

        console.log('txHash:', txHash)

        // Now go check etherscan to see the transaction!
    })
}
// })