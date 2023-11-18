const {ethers} = require("ethers");
const {Wallet} = ethers;

/**
 * Types
 */
interface IInitArgs {
  mnemonic?: string;
}

/**
 * Library
 */
export default class EIP155Lib {
  wallet: any;

  constructor(wallet: any) {
    this.wallet = wallet;
  }

  static init({ mnemonic }: IInitArgs) {
    const wallet = mnemonic
      ? Wallet.fromMnemonic(mnemonic)
      : Wallet.createRandom();

    return new EIP155Lib(wallet);
  }

  getMnemonic() {
    return this.wallet.mnemonic.phrase;
  }

  getAddress() {
    return this.wallet.address;
  }

  signMessage(message: string) {
    return this.wallet.signMessage(message);
  }

  _signTypedData(domain: any, types: any, data: any) {
    return this.wallet._signTypedData(domain, types, data);
  }

  connect(provider: any) {
    return this.wallet.connect(provider);
  }

  signTransaction(transaction: any) {
    return this.wallet.signTransaction(transaction);
  }
}

/**
 * @desc Reference list of eip155 chains
 * @url https://chainlist.org
 */

/**
 * Types
 */
export type TEIP155Chain = keyof typeof EIP155_CHAINS;

/**
 * Chains
 */
export const EIP155_MAINNET_CHAINS = {
  "eip155:1": {
    chainId: 1,
    name: "Ethereum",
    logo: "/chain-logos/eip155-1.png",
    rgb: "99, 125, 234",
    rpc: "https://cloudflare-eth.com/",
  },
  "eip155:43114": {
    chainId: 43114,
    name: "Avalanche C-Chain",
    logo: "/chain-logos/eip155-43113.png",
    rgb: "232, 65, 66",
    rpc: "https://api.avax.network/ext/bc/C/rpc",
  },
  "eip155:137": {
    chainId: 137,
    name: "Polygon",
    logo: "/chain-logos/eip155-137.png",
    rgb: "130, 71, 229",
    rpc: "https://polygon-rpc.com/",
  },
  "eip155:10": {
    chainId: 10,
    name: "Optimism",
    logo: "/chain-logos/eip155-10.png",
    rgb: "235, 0, 25",
    rpc: "https://mainnet.optimism.io",
  },
};

export const EIP155_TEST_CHAINS = {
  "eip155:5": {
    chainId: 5,
    name: "Ethereum Goerli",
    logo: "/chain-logos/eip155-1.png",
    rgb: "99, 125, 234",
    rpc: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  },
  "eip155:43113": {
    chainId: 43113,
    name: "Avalanche Fuji",
    logo: "/chain-logos/eip155-43113.png",
    rgb: "232, 65, 66",
    rpc: "https://api.avax-test.network/ext/bc/C/rpc",
  },
  "eip155:80001": {
    chainId: 80001,
    name: "Polygon Mumbai",
    logo: "/chain-logos/eip155-137.png",
    rgb: "130, 71, 229",
    rpc: "https://matic-mumbai.chainstacklabs.com",
  },
  "eip155:420": {
    chainId: 420,
    name: "Optimism Goerli",
    logo: "/chain-logos/eip155-10.png",
    rgb: "235, 0, 25",
    rpc: "https://goerli.optimism.io",
  },
};

export const EIP155_CHAINS = {
  ...EIP155_MAINNET_CHAINS,
  ...EIP155_TEST_CHAINS,
};

/**
 * Methods
 */
export const EIP155_SIGNING_METHODS = {
  PERSONAL_SIGN: "personal_sign",
  ETH_SIGN: "eth_sign",
  ETH_SIGN_TRANSACTION: "eth_signTransaction",
  ETH_SIGN_TYPED_DATA: "eth_signTypedData",
  ETH_SIGN_TYPED_DATA_V3: "eth_signTypedData_v3",
  ETH_SIGN_TYPED_DATA_V4: "eth_signTypedData_v4",
  ETH_SEND_RAW_TRANSACTION: "eth_sendRawTransaction",
  ETH_SEND_TRANSACTION: "eth_sendTransaction",
};