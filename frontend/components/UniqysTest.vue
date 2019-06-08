<template>
  <div>
    <button @click="review">review</button>
    <div>
      <p>data: { hash: '0x0000' }</p>
      <button @click="upvote">+1</button> <span>{{ currentUpvote }}</span>
      <button @click="downvote">-1</button> <span>{{ currentDownvote }}</span>
      <!--<button @click="downvote">+1</button>-->
    </div>
  </div>
</template>

<script>
import { EasyClientForWeb3 } from '@uniqys/easy-client'
import Web3 from 'web3'

export default {
  data() {
    return {
      easy: null,
      currentUpvote: 0,
      currentDownvote: 0
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
    this.getUpvote()
    this.getDownvote()
  },
  methods: {
    async review() {
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
    },
    async getUpvote() {
      const response = await this.easy.get('/api/upvote', {
        params: {
          hash: '0x0000'
        }
      })
      this.currentUpvote = response.data.upvote
      console.log(response.data) // eslint-disable-line
    },
    async upvote() {
      const response = await this.easy.post(
        '/api/upvote',
        { hash: '0x0000' },
        { sign: true }
      )
      console.log(response.data) // eslint-disable-line
      this.getUpvote()
    },
    async getDownvote() {
      const response = await this.easy.get('/api/downvote', {
        params: {
          hash: '0x0000'
        }
      })
      this.currentDownvote = response.data.downvote
      console.log(response.data) // eslint-disable-line
    },
    async downvote() {
      const response = await this.easy.post(
        '/api/downvote',
        { hash: '0x0000' },
        { sign: true }
      )
      console.log(response.data) // eslint-disable-line
      this.getDownvote()
    }
  }
}
</script>
