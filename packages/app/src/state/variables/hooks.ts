import { Contract } from 'ethers';
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getTotalNftsOnSale, getTotalNftsSold, getAllCyrusNftItems, getUserPurchasedCyrusNfts, getUserCreatedCyrusNfts, getContractAddress, getCurrentTokenId } from "./action";
import { useCyrusMarketContract, useCyrusContract } from "../../hooks/useContract";
import Web3 from 'web3';
import { BigNumber } from "bignumber.js";
import {toast} from 'react-toastify';

export const useGetTotalNftsOnSale = () => {
	const dispatch = useDispatch();
	const contract: Contract | null = useCyrusMarketContract();

	return useCallback(async () => {
		try {
			const transaction = await contract?.totalNftsOnSale();
			console.log("CYRUS getTotalNftsOnSale:", transaction.toNumber());
			dispatch(getTotalNftsOnSale(transaction.toNumber()))
		} catch (error) {
			console.log("CYRUS-getTotalNftsOnSale error:", error);
			toast.error(error)
		}
	}, [contract, dispatch])
}

export const useGetTotalNftsSold = () => {
	const dispatch = useDispatch();
	const contract: Contract | null = useCyrusMarketContract();

	return useCallback(async () => {
		try {
			const transaction = await contract?.totalNftsSold();
			console.log("CYRUS totalNftsSold:", transaction.toNumber());
			dispatch(getTotalNftsSold(transaction.toNumber()))
		} catch (error) {
			console.log("CYRUS-totalNftsSold error:", error);
			toast.error(error)
		}
	}, [contract, dispatch])
}

export const useGetAllCyrusNftItems = () => {
	const dispatch = useDispatch();
	const contract: Contract | null = useCyrusMarketContract();

	return useCallback(async () => {
		try {
			const transaction = await contract?.getAllCyrusNFTitems();
			console.log("CYRUS getAllCyrusNFTitems:", transaction.length);
			dispatch(getAllCyrusNftItems(transaction.length))
		} catch (error) {
			console.log("CYRUS-getAllCyrusNFTitems error:", error);
			toast.error(error)
		}
	}, [contract, dispatch])
}

export const useGetUserPurchasedCyrusNfts = () => {
	const dispatch = useDispatch();
	const contract: Contract | null = useCyrusMarketContract();

	return useCallback(async () => {
		try {
			const transaction = await contract?.getUserPurchasedCyrusNfts();
			console.log("CYRUS getUserPurchasedCyrusNfts:", transaction);
			dispatch(getUserPurchasedCyrusNfts(transaction))
		} catch (error) {
			console.log("CYRUS-getUserPurchasedCyrusNfts error:", error);
			toast.error(error)
		}
	}, [contract, dispatch])
}

export const useGetUserCreatedCyrusNfts = () => {
	const dispatch = useDispatch();
	const contract: Contract | null = useCyrusMarketContract();

	return useCallback(async () => {
		try {
			const transaction = await contract?.getUserCreatedCyrusNfts();
			console.log("CYRUS getUserCreatedCyrusNfts:", transaction);
			dispatch(getUserCreatedCyrusNfts(transaction));
		} catch (error) {
			console.log("CYRUS-getUserCreatedCyrusNfts error:", error);
			toast.error(error);
		}
	}, [contract, dispatch])

}
export const useGetCurrentTokenId = () => {
	const dispatch = useDispatch();
	const contract: Contract | null = useCyrusContract();

	return useCallback(async () => {
		try {
			const transaction: any = await contract?.currentTokenId();
			const num = transaction.toString()
			console.log("CYRUS currentTokenId:", num)

			dispatch(getCurrentTokenId(num));
		} catch (error) {
			console.log("CYRUS-currentTokenId error:", error);
			toast.error(error);
		}
	}, [contract, dispatch])

}

export const useGetContractAddress = () => {
	const dispatch = useDispatch();
	const contract: Contract | null = useCyrusContract();

	return useCallback(async () => {
		try {
			const transaction = await contract?.getContractAddress();
			console.log("CYRUS getContractAddress:", transaction);
			dispatch(getContractAddress(transaction));
		} catch (error) {
			console.log("CYRUS-getContractAddress error:", error);
			toast.error(error);
		}
	}, [contract, dispatch])
}