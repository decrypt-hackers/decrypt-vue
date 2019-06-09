<template>
  <section class="container">
    <ul>
      <li v-for="article in articles" class="list-group-item">
        <article class="media">
          <figure class="media-left">
            <figure class="image is-128x128">
              <center>
                <img class="is-square avatar" src="~/assets/random/3.jpg" />
                <div style="color:grey;">@{{ article.post.author }}</div>
              </center>
            </figure>
          </figure>
          <div class="media-content">
            <div class="content">
              {{ article.post.post }}
            </div>
                <font-awesome-icon
                    icon="glasses"
                    style="font-size: 18px; color: grey;"
                  />
            <span style="color:grey;"> {{ article.reviewer }}</span>
            <nav class="level is-mobile">
              <div class="level-right" />
              <div class="level-left">
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
              </div>
            </nav>
            <progress
              class="progress is-info"
              :value="vote[article.hash] ? vote[article.hash].upvote : 0"
              :max="(vote[article.hash] ? vote[article.hash].upvote : 0) + (vote[article.hash] ? vote[article.hash].downvote : 0)"
              ></progress>
          </div>
        </article>
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
      console.log(this.articles)
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
      this.getVote()
    }
  }
}
</script>

<style scoped>
.avatar {
  vertical-align: middle;
  width: 128px;
  height: 128px;
  border-radius: 50%;
}
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
