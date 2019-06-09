<template>
  <div>
    <p>balance: {{ balance }}</p>
    <button @click="review">review</button>
    <div v-for="post in posts" :key="post.hash">
      <p>
        {{ post.hash }} reviewed: {{ post.reviewer }}
        <button @click="upvote(post.hash)">+1</button>
        <span>{{ vote[post.hash] ? vote[post.hash].upvote : 0 }}</span>
        <button @click="downvote(post.hash)">-1</button>
        <span>{{ vote[post.hash] ? vote[post.hash].downvote : 0 }}</span>
      </p>
    </div>
    <button @click="tap">coin faucet</button>
  </div>
</template>

<script>
import { EasyClientForWeb3 } from '@uniqys/easy-client'
import Web3 from 'web3'

export default {
  data() {
    return {
      easy: null,
      posts: [],
      vote: {},
      balance: 0
    }
  },
  async mounted() {
    if (process.browser) {
      if (Web3.givenProvider) {
        await window.ethereum.enable() // eslint-disable-line
        const easy = new EasyClientForWeb3(Web3.givenProvider, location.origin)
        this.easy = easy
      }
    }
    this.getMessage()
    this.getBalance()
    await this.getPosts()
    this.getVote()
  },
  methods: {
    async review() {
      const date = new Date()
      const response = await this.easy.post(
        '/api/post',
        {
          post: {
            hash: date.getMilliseconds(),
            title: 'test 1',
            article: 'testing ' + new Date(),
            author: 'John Doe'
          }
        },
        { sign: true }
      )
      this.getBalance()
      await this.getPosts()
      console.log('review', response.data) // eslint-disable-line
    },
    async getVote() {
      for (const post of this.posts) {
        const upvote = await this.getUpvote(post.hash)
        const downvote = await this.getDownvote(post.hash)
        console.log(post.hash, upvote, downvote) // eslint-disable-line
        this.$set(this.vote, post.hash, {
          upvote,
          downvote
        })
      }
    },
    async getBalance() {
      if (!this.easy) return

      const address = window.ethereum.selectedAddress

      const response = await this.easy.get('/api/balance', {
        params: {
          address
        }
      })

      this.balance = response.data.balance

      console.log('getBalance', response.data) // eslint-disable-line
    },
    async getPosts() {
      if (!this.easy) return
      const response = await this.easy.get('/api/posts')
      this.posts = response.data.posts
      console.log('getPosts', response.data) // eslint-disable-line
    },
    async getMessage() {
      if (!this.easy) return
      const response = await this.easy.get('/api/post', {
        params: {
          hash: '0x0000'
        }
      })
      console.log('getMessage', response.data) // eslint-disable-line
    },
    async getUpvote(hash) {
      if (!this.easy) return
      const response = await this.easy.get('/api/upvote', {
        params: {
          hash
        }
      })
      return response.data.upvote
      console.log('getUpvote', response.data) // eslint-disable-line
    },
    async upvote(hash) {
      if (!this.easy) return
      const response = await this.easy.post(
        '/api/upvote',
        { hash },
        { sign: true }
      )
      console.log('upvote', response.data) // eslint-disable-line
      this.getVote()
    },
    async getDownvote(hash) {
      if (!this.easy) return
      const response = await this.easy.get('/api/downvote', {
        params: {
          hash
        }
      })
      return response.data.downvote
      console.log('getDownvote', response.data) // eslint-disable-line
    },
    async downvote(hash) {
      if (!this.easy) return
      const response = await this.easy.post(
        '/api/downvote',
        { hash },
        { sign: true }
      )
      console.log('downvote', response.data) // eslint-disable-line
      await this.getPosts()
      await this.getBalance()
      this.getVote()
    },
    async tap() {
      if (!this.easy) return
      const response = await this.easy.post('/api/tap', {}, { sign: true })
      console.log('tap', response.data) // eslint-disable-line
      this.getBalance()
    }
  }
}
</script>
