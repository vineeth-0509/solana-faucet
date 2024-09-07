import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import {
    WalletMultiButton,
    WalletDisconnectButton,
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import { Airdrop } from './Airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';


function App(){

  return (

    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/P4JQQ8r_vbjVKdbN9NuPf2RwyRTMPtus"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton></WalletMultiButton>
                  <WalletDisconnectButton></WalletDisconnectButton>
                   <div>
                      hi there Hello
                   </div>
                   <Airdrop/>
                </WalletModalProvider>
            </WalletProvider>
    </ConnectionProvider>
  
  )
}

export default App