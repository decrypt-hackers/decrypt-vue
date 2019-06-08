<template>
  <section class="container">
    <div class="columns features">
      <articleCard v-for="blog in blogs" :key="blog.title" />
    </div>
  </section>
</template>

<script>
import articleCard from '~/components/articleCard.vue'

export default {
  components: {
    articleCard
  },
  data: function() {
    return {
      blogs: [
        {
          title: 'タイトル1',
          img: 'https://goo.gl/hvjbc4'
        },
        {
          title: 'タイトル2',
          img: 'https://goo.gl/hvjbc4'
        },
        {
          title: 'タイトル3',
          img: 'https://goo.gl/hvjbc4'
        }
      ]
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
