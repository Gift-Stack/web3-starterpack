import { AddressZero } from "@ethersproject/constants";
import { Contract } from "@ethersproject/contracts";
import { getContract } from "../functions/contract";
import { useMemo } from "react";
import CYRUS_ABI from "../constants/abi.json";
import CYRUS_MARKET_ABI from "../constants/market.json";
import { useActiveWeb3React } from "./useActiveWeb3React";
import {
  cyrusMarketAddress,
  cyrusNFTAddress,
} from "../constants";

export function useCyrusContract(): Contract | null {
  return useContract(cyrusNFTAddress, CYRUS_ABI, true);
}

export function useCyrusMarketContract(): Contract | null {
  return useContract(cyrusMarketAddress, CYRUS_MARKET_ABI, true);
}

// returns null on errors
export function useContract(
  nameOrAddress: string | undefined,
  ABI: any = undefined,
  withSignerIfPossible = true
): Contract | null {
  const { library, account, chainId } = useActiveWeb3React();

  let address: string | undefined = nameOrAddress;

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      const contract = getContract(
        address.toString(),
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
      return contract;
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [nameOrAddress, address, ABI, library, withSignerIfPossible, account]);
}
