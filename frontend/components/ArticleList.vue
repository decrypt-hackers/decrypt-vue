<template>
  <section class="container">
    <ul>
      <li v-for="article in articles" class="list-group-item" :key="article.hash">
        <h2>
          <b>@{{ article.post.author }}</b>
        </h2>
        <br />
        <h1>{{ article.post.article }}</h1>
        <p>reviewer: {{ article.reviewer }}</p>

        <progress class="progress" value="15" max="100">15%</progress>
        <button @click="downvote(article.hash)">
          <font-awesome-icon
            icon="thumbs-down"
            style="font-size: 25px; color: hsl(204, 86%, 53%);"
          />
        </button>
        {{ vote[article.hash] ? vote[article.hash].downvote : 0 }}
        <button @click="upvote(article.hash)">
          <font-awesome-icon
            icon="thumbs-up"
            style="font-size: 25px; color: hsl(204, 86%, 53%);"
          />
        </button>
        {{ vote[article.hash] ? vote[article.hash].upvote : 0 }}
      </li>
    </ul>
    <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" />
  </section>
</template>

<script>
// import axios from 'axios'

export default {
  async created() {
    if (!this.$easy.easy) {
      await this.$easy.enable()
      await this.displayArticles()
      this.getVote()
    }
  },
  data() {
    return {
      articles: [],
      vote: {}
    }
  },
  methods: {
    async displayArticles() {
      const response = await this.$easy.easy.get('/api/posts')
      this.articles = response.data.posts
    },
    async getVote() {
      for (const post of this.articles) {
        const upvote = await this.getUpvote(post.hash)
        const downvote = await this.getDownvote(post.hash)
        this.$set(this.vote, post.hash, {
          upvote,
          downvote
        })
      }
    },
    async getUpvote(hash) {
      if (!this.$easy.easy) return
      const response = await this.$easy.easy.get('/api/upvote', {
        params: {
          hash
        }
      })
      return response.data.upvote
      console.log('getUpvote', response.data) // eslint-disable-line
    },
    async upvote(hash) {
      if (!this.$easy.easy) return
      const response = await this.$easy.easy.post(
        '/api/upvote',
        { hash },
        { sign: true }
      )
      console.log('upvote', response.data) // eslint-disable-line
      this.getVote()
    },
    async getDownvote(hash) {
      if (!this.$easy.easy) return
      const response = await this.$easy.easy.get('/api/downvote', {
        params: {
          hash
        }
      })
      return response.data.downvote
      console.log('getDownvote', response.data) // eslint-disable-line
    },
    async downvote(hash) {
      if (!this.$easy.easy) return
      const response = await this.$easy.easy.post(
        '/api/downvote',
        { hash },
        { sign: true }
      )
      console.log('downvote', response.data) // eslint-disable-line
      await this.getPosts()
      await this.getBalance()
      this.getVote()
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 0px;
}

button {
  opacity: 0%;
  background-color: white;
  border-color: white;
}

i:hover {
  transform: scale(1.3, 1.3);
  transition-duration: 0.5s;
}

ul {
  width: 80%;
}
</style>
