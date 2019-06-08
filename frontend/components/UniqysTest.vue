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
    async send() {
      const response = await this.easy.post(
        '/api/post',
        { post: { hash: '0x0000' } },
        { sign: true }
      )
      console.log(response.data) // eslint-disable-line
    },
    async getMessage() {
      const response = await this.easy.get('/api/post', {
        params: {
          hash: '0x0000'
        }
      })
      console.log(response.data) // eslint-disable-line
    }
  }
}
</script>
