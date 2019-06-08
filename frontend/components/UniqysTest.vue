<template>
  <div>
    <input v-model="message" type="text" />
    <button @click="send">send</button>
  </div>
</template>

<script>
import { EasyClientForWeb3 } from '@uniqys/easy-client'
import Web3 from 'web3'

export default {
  data() {
    return {
      message: '',
      easy: null
    }
  },
  async mounted() {
    if (process.browser) {
      console.log(Web3.givenProvider) // eslint-disable-line
      await window.ethereum.enable() // eslint-disable-line
      const easy = new EasyClientForWeb3(Web3.givenProvider, location.origin)
      this.easy = easy
    }
    this.getMessage()
  },
  methods: {
    send() {
      console.log(this.message) // eslint-disable-line
      this.easy.post('/api/message', { message: this.message }, { sign: true })
    },
    async getMessage() {
      const data = await this.easy.get('/api/message')
      console.log({ data }) // eslint-disable-line
    }
  }
}
</script>
