import { EasyClientForWeb3 } from '@uniqys/easy-client'
import Web3 from 'web3'

const Easy = {
  easy: null,
  async enable() {
    if (Web3.givenProvider) {
      await window.ethereum.enable()
      const easy = new EasyClientForWeb3(Web3.givenProvider, location.origin)
      this.easy = easy
      return true
    }
    return false
  }
}

export default (_, inject) => {
  inject('easy', Easy)
}
