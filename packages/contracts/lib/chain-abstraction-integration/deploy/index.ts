export const DEFAULT_ARGS: Record<number, any> = {
  // default to mimic optimism
  31337: {
    CONNEXT: "0x8f7492DE823025b4CfaAB1D34c58963F2af5DEDA",
    WETH: "0x4200000000000000000000000000000000000006", // Weth on Optimism
    USDC: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", // USDC on Optimism
    DOMAIN: "6648936", // Ethereum domain ID
    ONEINCH_ROUTER: "",
    UNIV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
  },
  // Optimism
  10: {
    CONNEXT: "0x8f7492DE823025b4CfaAB1D34c58963F2af5DEDA",
    WETH: "0x4200000000000000000000000000000000000006", // Weth on Optimism
    USDC: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", // USDC on Optimism
    DOMAIN: "1869640809", // Optimism domain ID
    ONEINCH_ROUTER: "0x1111111254EEB25477B68fb85Ed929f73A960582",
    UNIV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
  },
  // Arbitrum
  42161: {
    CONNEXT: "0xEE9deC2712cCE65174B561151701Bf54b99C24C8", // Connext on Arbitrum
    WETH: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", // Weth on Arbitrum
    USDC: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", // USDC on Arbitrum (donation asset)
    DOMAIN: "1634886255", // Arbitrum domain ID
    ONEINCH_ROUTER: "0x1111111254EEB25477B68fb85Ed929f73A960582",
    UNIV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
  },
  // Polygon
  137: {
    CONNEXT: "0x11984dc4465481512eb5b777E44061C158CF2259", // Connext
    WETH: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", // Weth
    USDC: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", // USDC
    DOMAIN: "1886350457", // Polygon domain ID
    ONEINCH_ROUTER: "0x1111111254EEB25477B68fb85Ed929f73A960582",
    UNIV3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
  },
  // Bnb
  56: {
    CONNEXT: "0xCd401c10afa37d641d2F594852DA94C700e4F2CE", // Connext
    USDC: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // USDC
    DOMAIN: "6450786", // Polygon domain ID
    ONEINCH_ROUTER: "0x1111111254EEB25477B68fb85Ed929f73A960582",
    UNIV3_ROUTER: "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4", // PancakeSwap Smart Router
  },
  // Gnosis
  100: {
    CONNEXT: "0x5bB83e95f63217CDa6aE3D181BA580Ef377D2109", // Connext
    USDC: "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83", // USDC
    DOMAIN: "6778479", // Gnosis domain ID
    ONEINCH_ROUTER: "0x1111111254EEB25477B68fb85Ed929f73A960582",
    UNIV2_ROUTER: "0x1C232F01118CB8B424793ae03F870aa7D0ac7f77", // HoneysSwap UniV2 Router
  },
};

export const MIDAS_CONFIG: Record<number, any> = {
  137: {
    COMPTROLLER: "0xDb984f8cbc1cF893a18c2DA50282a1492234602c",
  },
  56: {
    COMPTROLLER: "0x31d76A64Bc8BbEffb601fac5884372DEF910F044",
  },
  42161: {
    COMPTROLLER: "0x185Fa7d0e7d8A4FE7E09eB9df68B549c660e1116",
  },
};

export const MEAN_CONFIG: Record<number, any> = {
  137: {
    HUB: "0xA5AdC5484f9997fBF7D405b9AA62A7d88883C345",
  },
};
