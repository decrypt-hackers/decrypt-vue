const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    username: {
      type: String,
      default: this.id
    },
    id: {
      type: String,
      required: true
    },
    weekly: {
      type: Number,
      default: 0
    }
},{
    collection: 'Users'
})

module.exports = mongoose.model('Users', user)
