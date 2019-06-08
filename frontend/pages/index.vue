<template>
  <div>
    <div class="container">
      <div class="inner">
        <Header :permission="permission" :readView="read" @showReview="showReview()" @showRead="showRead()"></Header>
        <div v-if="read">
          <CreateNewPost></CreateNewPost>
          <ArticleList></ArticleList>
        </div>
        <ReviewArticleList v-if="!read"></ReviewArticleList>
      </div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import ReviewArticleList from '../components/ReviewArticleList'
import ArticleList from '../components/ArticleList'
import CreateNewPost from '../components/CreateNewpost'

export default {
  components: {
    Header,
    ReviewArticleList,
    ArticleList,
    CreateNewPost
  },
  data() {
    return {
      permission: true,
      read: true,
      user: ''
    }
  },
  methods: {
    showReview() {
      this.read = false
    },
    showRead() {
      this.read = true
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
.inner {
  width: 100%;
}
.container {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
