import { ChainId } from '../constants/chainIds'
import { NetworkContextName } from '../constants'
import { getPriorityConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import type { Connector } from '@web3-react/types'
import { WalletConnect } from '@web3-react/walletconnect'
import { WalletLink } from '@web3-react/walletlink'
import { hooks as metaMaskHooks, metaMask } from 'connectors/metaMask'
import { hooks as networkHooks, network } from 'connectors/network'
import { hooks as walletConnectHooks, walletConnect } from 'connectors/walletConnect'
import { hooks as walletLinkHooks, walletLink } from 'connectors/walletLink'
import type { Web3Provider } from '@ethersproject/providers';
import { useAppSelector } from 'state/hooks'

// const {
//   usePriorityConnector,
//   usePriorityChainId,
//   usePriorityAccounts,
//   usePriorityIsActivating,
//   usePriorityError,
//   usePriorityAccount,
//   usePriorityIsActive,
//   usePriorityProvider,
//   usePriorityENSNames,
//   usePriorityENSName,
//   usePriorityWeb3React,
// } = getPriorityConnector(
//   [metaMask, metaMaskHooks],
//   [walletConnect, walletConnectHooks],
//   [walletLink, walletLinkHooks],
//   [network, networkHooks]
// )

export function useActiveWeb3React(): {
  connector: Connector;
  library: Web3Provider | undefined;
  chainId: number | undefined;
  account: string | undefined;
  active: boolean;
  error: Error | undefined;
  accounts: string[] | undefined;
  isActivating: boolean
} {
  const { usePriorityConnector, usePriorityProvider, usePriorityWeb3React, usePriorityIsActivating, usePriorityAccounts } = useAppSelector(
    (state) => state.application.priorityConnector
  );
  const priorityProvider = usePriorityProvider()

  const { connector,
    library,
    chainId,
    account,
    active,
    error } = usePriorityWeb3React(priorityProvider)
  const isActivating = usePriorityIsActivating()
  const accounts = usePriorityAccounts()
  // replace with address to impersonate
  return {
    connector,
    library,
    chainId,
    account,
    accounts,
    active,
    error, isActivating
  }
}

export default useActiveWeb3React
