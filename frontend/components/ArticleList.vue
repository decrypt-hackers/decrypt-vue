<template>
  <section class="container">
    <ul>
      <li v-for="article in articles" class="list-group-item">
        <h2>
          <b>@{{ article.author }}</b>
        </h2>
        <br />
        <h1>{{ article.post }}</h1>
        {{ article.upvotes }}

        <progress class="progress" value="15" max="100">15%</progress>
        <button>
          <font-awesome-icon
            icon="thumbs-down"
            style="font-size: 25px; color: hsl(204, 86%, 53%);"
          />
        </button>
        {{ article.downvotes }}
        <button>
          <font-awesome-icon
            icon="thumbs-up"
            style="font-size: 25px; color: hsl(204, 86%, 53%);"
          />
        </button>
      </li>
    </ul>
    <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" />
  </section>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      articles: [
        {
          title: 'test 1',
          article: 'testing 1,2,3',
          author: 'John Doe'
        },
        {
          title: 'test 2',
          article: 'testing 1,2,3, 4',
          author: 'Bob'
        }
      ]
    }
  },
  methods: {
    displayArticles() {},
    upvote(article) {},
    downvote(article) {}
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
