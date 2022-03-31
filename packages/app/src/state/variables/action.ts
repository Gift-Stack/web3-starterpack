import {createAction} from '@reduxjs/toolkit';

export const getTotalNftsOnSale = createAction<any>('variables/getTotalNftsOnSale');

export const getTotalNftsSold = createAction<any>('varialbes/getTotalNftsSold');

export const getAllCyrusNftItems = createAction<any>('variables/getAllCyrusNftItems');

export const getUserPurchasedCyrusNfts = createAction<any>('variables/getUserPurchasedCyrusNfts');

export const getUserCreatedCyrusNfts = createAction<any>('variables/getUserCreatedCyrusNfts');

export const getCurrentTokenId = createAction<any>('variables/getCurrentTokenId');

export const getContractAddress = createAction<any>('variables/getContractAddress');