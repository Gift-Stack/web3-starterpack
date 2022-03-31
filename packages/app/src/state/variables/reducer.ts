import {createReducer} from '@reduxjs/toolkit';
import {getTotalNftsOnSale, getTotalNftsSold,getAllCyrusNftItems,getUserPurchasedCyrusNfts,getUserCreatedCyrusNfts, getCurrentTokenId, getContractAddress} from './action';

export const initialState = {
	totalNftOnSale: 0,
	totalNftSold: 0,
	cyrustNftItems: 0,
	userPurchasedCyrusNfts: 0,
	userCreatedCyrusNfts: 0,
	currentTokenId: 0,
	contractAddress: ''
}

export default createReducer(initialState, builder => builder.addCase(getTotalNftsOnSale, (state:any, action:any) => {
	state.totalNftOnSale = action.payload;
}).addCase(getTotalNftsSold, (state:any, action:any) => {
	state.totalNftSold = action.payload
}).addCase(getAllCyrusNftItems, (state:any, action:any) => {
	state.cyrustNftItems = action.payload;
}).addCase(getUserPurchasedCyrusNfts, (state:any, action:any) => {
	state.userPurchasedCyrusNfts = action.payload;
}).addCase(getUserCreatedCyrusNfts, (state:any, action:any) => {
	state.userCreatedCyrusNfts = action.payload
}).addCase(getCurrentTokenId, (state:any, action:any) => {
	state.currentTokenId = action.payload;
}).addCase(getContractAddress, (state:any, action:any) => {
		state.contractAddress = action.payload;
}))