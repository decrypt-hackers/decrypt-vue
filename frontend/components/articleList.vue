<template>
  <section class="container">
    <div>
        <h2 v-if="this.articles.length<1">記事がありません</h2>
        <ul>
          <li class="list-group-item" v-for="article in articles">
              <h2><b>@{{article.author}}</b></h2> <br />
              <h1>{{article.post}}</h1>
          </li>
        </ul>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      articles: [
        // {
        //   title: 'test 1',
        //   article: 'testing 1,2,3',
        //   author: 'John Doe'
        // },
        // {
        //   title: 'test 2',
        //   article: 'testing 1,2,3, 4',
        //   author: 'Bob'
        // }
      ]
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
    }
  }
}
</script>

<style>
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
</style>
