import { useWallet, useConnection } from "@solana/wallet-adapter-react";
//wellfound , Prepdex, Dex 1CT one click trading, biconomy  , sei ,,brain trust.

//The useWallet 'Hook' provides the wallet variable inside the Airdrop Component, because I wrapped the Airdrop component inside the walletProvider
export function Airdrop(){
    const wallet = useWallet();
    const {connection} = useConnection();


    //define the function inside the component body
  async function sendAirdropToUser(){
    const amount = document.getElementById("publicKey").value 
    await  connection.requestAirdrop(wallet.publicKey,amount*1000000000);
    alert("airdropped sol")
    }

    return <div>
       
        <input id="publicKey" type="text" placeholder='Amount'/>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}