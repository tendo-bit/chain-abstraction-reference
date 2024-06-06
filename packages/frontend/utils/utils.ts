// This file is very specific to connext protocol.
// For more reference go to https://docs.connext.network/

type DomainID = {
  [key: number]: string;
};
type ChainID = {
  [key: string]: number;
};

export const chainIdToRPC = (chainId: number) => {
  // Need to add more RPCs according to chains
  const chainToRPC: DomainID = {
    10: "https://rpc.ankr.com/optimism",
    137: "https://polygon.llamarpc.com",
    42161: "https://arb-mainnet-public.unifra.io",
    56: "https://bsc.rpc.blxrbdn.com",
  };

  return chainToRPC[chainId];
};

export const domainToChainID = (domain: string) => {
  const domainToChain: ChainID = {
    "1869640809": 10,
    "1886350457": 137,
    "1634886255": 42161,
    "6450786": 56,
    "6648936": 1,
  };
  return domainToChain[domain];
};

export const chainToDomainId = (chainId: number) => {
  const domainToChain: DomainID = {
    1: "6648936",
    10: "1869640809",
    137: "1886350457",
    42161: "1634886255",
    56: "6450786",
  };
  return domainToChain[chainId];
};

// Specific to covalent API
export const chainIdToChainName = (chainId: number) => {
  const chainIdToChainName: DomainID = {
    1: "eth-mainnet",
    10: "optimism-mainnet",
    137: "matic-mainnet",
    42161: "arbitrum-mainnet",
    56: "bsc-mainnet",
    100: "gnosis-mainnet",
  };
  return chainIdToChainName[chainId];
};
