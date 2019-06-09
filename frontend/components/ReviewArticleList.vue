<template>
  <section class="container">
      <ul>
        <li class="list-group-item" v-for="article in articles">
            <h2><b>@{{article.author}}</b></h2> <br />
            <h1>{{article.post}}</h1>
            <button><i @click="accept(article)" class="em em-white_check_mark"></i></button>
            <button><i @click="decline(article)" class="em em-no_entry"></i></button>
        </li>
      </ul>
    <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  props: {
    user: {
      type: String,
      default: 'John Doe'
    }
  },
  created() {
    this.displayArticles()
  },
  methods: {
    displayArticles(){
      var url = 'http://localhost:8080/queuedPosts'
      this.$axios.$get(url)
      .then((res) => {
        this.articles = res;
        console.log(res);
      });
    },
    accept(article) {
      window.alert('ブロックチェーンに投稿されました')
      var url = "http://localhost:8080/queuedPosts"
      article.reviewer = this.user
      // Replace with post on blockchain
      console.log(article)
      this.$axios.$delete(url, article._id)
      .then((res) => {
        console.log(res);
      });
      this.displayArticles()
    },
    decline(article) {
      window.alert('投稿を拒否しました')
      var url = "http://localhost:8080/queuedPosts"
      this.$axios.$delete(url, article._id)
      .then((res) => {
        console.log(res);
      });
      this.displayArticles()
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
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
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
