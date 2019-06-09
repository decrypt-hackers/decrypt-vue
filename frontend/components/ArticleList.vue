<template>
  <section class="container">
    <ul>
      <li v-for="article in articles" class="list-group-item">
        <article class="media">
          <figure class="media-left">
            <figure class="image is-128x128">
              <center>
                <img class="is-square avatar" src="~/assets/random/3.jpg" />
                <div style="color:grey;">@{{ article.author }}</div>
              </center>
            </figure>
          </figure>
          <div class="media-content">
            <div class="content">
              {{ article.post }}
            </div>
            <nav class="level is-mobile">
              <div class="level-right" />
              <div class="level-left">
                <button>
                  <font-awesome-icon
                    icon="thumbs-down"
                    style="font-size: 25px; color: hsl(204, 86%, 53%);"
                  />
                </button>
                {{ article.upvotes }}
                <button>
                  <font-awesome-icon
                    icon="thumbs-up"
                    style="font-size: 25px; color: hsl(204, 86%, 53%);"
                  />
                </button>
                {{ article.downvotes }}
              </div>
            </nav>
            <progress
              class="progress"
              :value="article.upvotes"
              :max="article.upvotes + article.downvotes"
              >15%</progress
            >
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
  data() {
    return {
      articles: [
        {
          title: 'test 1',
          article: 'testing 1,2,3',
          author: 'John Doe',
          post: 'John DoeJohn DoeJohn DoeJohn Doe',
          upvotes: 3,
          downvotes: 9
        },
        {
          title: 'test 2',
          article: 'testing 1,2,3, 4',
          author: 'Bob',
          post: 'John DoeJohn DoeJohn DoeJohn Doe',
          upvotes: 3,
          downvotes: 9
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
