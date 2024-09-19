import { ethers, Signer } from 'ethers';

export class SmartContract {
    protected contract: ethers.Contract;

    constructor(provider: ethers.providers.Provider | Signer, address: string, abi: any) {
        this.contract = new ethers.Contract(address, abi, provider);
    }
}
