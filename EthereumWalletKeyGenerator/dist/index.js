"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const bip39_1 = require("bip39");
const mnemonics = "*secret phrase here!*";
const seed = (0, bip39_1.mnemonicToSeedSync)(mnemonics);
for (let i = 0; i < 4; i++) {
    const hdNode = ethers_1.HDNodeWallet.fromSeed(seed);
    const derivationPath = `m/44'/60'/${i}'/0'`;
    const derivedSeed = hdNode.derivePath(derivationPath);
    const wallet = new ethers_1.Wallet(derivedSeed.privateKey);
    console.log(wallet.address);
}
