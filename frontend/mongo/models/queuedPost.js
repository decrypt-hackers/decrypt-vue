const mongoose = require('mongoose')
const Schema = mongoose.Schema

const queuedPost = new Schema({
    owner: {
      type: String,
      required: true
    },
    hash: {
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
    reviewers: [
      {
        type: String,
        required: true
      }
    ]
},{
    collection: 'QueuedPosts'
})

module.exports = mongoose.model('QueuedPosts', queuedPost);