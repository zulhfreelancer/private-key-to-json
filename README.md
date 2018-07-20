A simple CLI tool to convert Ethereum plain private key to UTC/JSON keystore format.

---

### WARNING

Please don't share your private key (plain text or UTC/JSON keystore format) to anyone. Keep it safe!

---

### Usage

#### Part 1 - Build the CLI

```
$ cd /path/to/projects
$ git clone https://github.com/zulhfreelancer/private-key-to-json.git
$ cd private-key-to-json
$ npm link
```

`private-key-to-json` command will be available globally.

#### Part 2 - Using the CLI

```
$ cd /path/to/any/folder
$ private-key-to-json

**************************** WARNING *****************************
* This will create/replace private_key.json file in this folder. *
* ------------------ Press Ctrl + C to abort. ------------------ *
******************************************************************

Please enter the plain private key:
xxx

Please enter the passphrase:
<just-press-enter-if-it-has-no-passphrase>


JSON keystore generated. See private_key.json file.
```

#### Part 3 - The UTC/JSON keystore

Inside the `/path/to/any/folder`, you will see a file named `private_key.json`. Every time you run `private-key-to-json` command, it will replace the content of the file.

### Testing the Private Key

You can test the UTC/JSON keystore file at [MyCrypto](https://legacy.mycrypto.com/#view-wallet-info) by choosing `Keystore / JSON File` option in that webpage.

### Uninstall the CLI

If you no longer need the CLI, you can remove it by running the following command:

```
$ npm uninstall -g private-key-to-json
```
