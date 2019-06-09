const mongoose = require('mongoose')
const Schema = mongoose.Schema

const queuedPost = new Schema(
  {
    author: {
      type: String,
      required: true
    },
    post: {
      type: String,
      required: true
    },
    downvotes: {
      type: Number,
      default: 0
    },
    upvotes: {
      type: Number,
      default: 0
    },
    upReviewers: [
      {
        type: String,
        required: false
      }
    ]
  },
  {
    reviewer: {
      type: String,
      required: false
    }
},{
    collection: 'QueuedPosts'
  }
)

module.exports = mongoose.model('QueuedPosts', queuedPost)
