// import store from "../redux/store";
import { ethers } from "ethers";

export const BLOCKCHAIN_INITIALIZED = "BLOCKCHAIN_INITIALIZED"; // action type

// action creators (dispatch sends this to redux reducer)

function blockchainInitialized(data) {
    return {
        type: BLOCKCHAIN_INITIALIZED,
        payload: data
    };
}

//  set up provider, signer and contract instance

const initBlockchain = async () => {

    // get contract instance and user address
    // If you don't specify a //url//, Ethers connects to the default
    // (i.e. ``http:/\/localhost:8545``)

    // I used this to connect to Ganache:

    //const provider = await new ethers.providers.JsonRpcProvider();
    //console.log("provider", provider);

    let provider;
    window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));

    // The provider also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, we need the account signer...

    const signer = await provider.getSigner()
    console.log("signer", signer);
    const userAddress = await signer.getAddress();
    console.log("user address", userAddress);

    // initialize shadow contract
    // let MV = null;
    // const abi = JSON.parse("TODO ********** add MoneyVote contract abi here ************");
    //
    //
    // MV = new ethers.Contract("TODO ********* MoneyVote contract address here ***********", abi, signer)

    // put state data into the REDUX store for easy access from other pages and components
    // let data = {provider, signer, MV, userAddress} // ***** real one ****
    let data = {userAddress} // temp just tp play with the user address
    // store.dispatch(blockchainInitialized(data))
    return data;
}

export default initBlockchain;