#!/usr/bin/env node

var fs       = require('fs');
var chalk    = require('chalk');
var readline = require('readline');
var beautify = require('json-beautify');
var Wallet   = require('ethereumjs-wallet');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var msg = "";
msg += "**************************** WARNING *****************************\n";
msg += "* This will create/replace private_key.json file in this folder. *\n";
msg += "* ------------------ Press Ctrl + C to abort. ------------------ *\n";
msg += "******************************************************************\n";
console.log(chalk.yellow(msg));

rl.question('Please enter the plain private key:\n', (answer1) => {
  if (answer1 == "") {
    rl.close();
    return console.log(chalk.red("Private key is empty. Please try again."));
  }

  if (answer1.length != 64) {
    rl.close();
    return console.log(chalk.red("Private key length must be 64 characters."));
  }

  rl.question('\nPlease enter the passphrase:\n', (answer2) => {
    // it's fine not to check if passphrase is empty i.e. Ganache private key
    var key     = Buffer.from(answer1, 'hex');
    var wallet  = Wallet.fromPrivateKey(key);
    var privKey = beautify(wallet.toV3(answer2), null, 2);
    
    fs.writeFile("./private_key.json", privKey, function(err) {
      if(err) {
        return console.log(err);
      }
    }); 


    console.log("\n");
    var ok = chalk.green("JSON keystore generated. See private_key.json file.");
    console.log(ok)
    rl.close();
  });
});
