const mongoose = require('mongoose')
const Schema = mongoose.Schema

const queuedPost = new Schema({
    author: {
      type: String,
      required: true
    },
    post: {
      type: String,
      required: true
    },
    reviewer: {
      type: String,
      required: false
    }
},{
    collection: 'QueuedPosts'
})

module.exports = mongoose.model('QueuedPosts', queuedPost);