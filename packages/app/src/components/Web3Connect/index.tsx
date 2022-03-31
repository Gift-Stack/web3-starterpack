import React from 'react'
import { useWalletModalToggle } from '../../state/application/hooks'

export default function Web3Connect({ className = '', title, ...rest }: any) {
  const toggleWalletModal = useWalletModalToggle()
  return (
    <button id="connect-wallet" onClick={toggleWalletModal} variant="outlined" className={className} {...rest}>
      {title}
    </button>
  )
}
