<template>
  <div>
    <div align="right">
    <div class="circle-icon">
      <button @click="toggle()">
         <font-awesome-icon
                    icon="edit"
                    style="font-size: 25px; color: white;"
                  />
      </button>
    </div>
    </div>
    <div v-if="adding" class="fields">
      <div class="maininputs">

<textarea v-model="post" class="textarea" placeholder="Post"></textarea>
</div>
      <div class="level">
        <div class="level-item">
        <button title="Post"  style="color:white;" @click="addPost()">Submit</button>
        </div>
        <div class="level-item">
        <button title="Close"  style="color:white;" @click="toggle()">Close</button>
      </div>
      </div>
      <div v-if="!filled" class="warning">
        <h4  style="color:white;">Post too long!<i class="em em-angry"></i></h4>
      </div>
    </div>

    <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    username: {
      type: String,
      default: 'John Doe'
    }
  },
  data() {
    return {
      adding: false,
      filled: true,
      post: ''
    }
  },
  methods: {
    toggle() {
      this.adding = !this.adding
    },
    checkFilled() {
      return this.post != ''
    },
    addPost() {
      if (!this.checkFilled()) {
        this.filled = false
        return
      }
      this.filled = true
      const url = 'http://localhost:8080/queuedPosts'
      const newPost = {
        author: this.username,
        post: this.post
      }
      axios
        .post(url, newPost)
        .then(() => {
          this.clearField()
          this.toggle()
        })
        .catch(err => console.log(err))
    },
    clearField() {
      this.post = ''
    }
  }
}
</script>

<style scoped>
.circle-icon {
    background-color: rgba(32, 156, 238);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    vertical-align: center;
    margin-right:128px;
}
.fields {
  background-color: rgba(32, 156, 238, 0.8);
  margin: 10px 15px 10px 15px;
  border-radius: 12px;
}
input {
  margin: 10px 15px 10px 15px;
  width: 60%;
  height: 70px;
  padding-bottom: 40px;
}
button {
  display: block;
  margin-left: auto;
  margin-right: auto;
      width: 100px;
    height: 100px;
    border-radius: 50%;
  background-color: transparent;
  border-color: transparent;
  margin-top: 10px;
  margin-bottom: 10px;
}
button:hover {
  background-color: rgba(32, 156, 238, 0.8);
  transition-duration: 0.5s;
}
.warning {
  color: red;
  text-align: center;
}
.desc {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#descbox {
  width: 70%;
  height: 75px;
}
.maininputs {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#create {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.createLunch {
  display: flex;
}
</style>
