import { HDNodeWallet, Wallet } from "ethers";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";

const mnemonics = "*secret phrase here!*";
const seed = mnemonicToSeedSync(mnemonics);

for (let i = 0; i < 4; i++) {
  const hdNode = HDNodeWallet.fromSeed(seed);
  const derivationPath = `m/44'/60'/${i}'/0'`;
  const derivedSeed = hdNode.derivePath(derivationPath);
  const wallet = new Wallet(derivedSeed.privateKey);
  console.log(wallet.address);
}
