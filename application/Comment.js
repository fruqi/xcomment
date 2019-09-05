const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  org: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    default: 0
  }
})

module.exports = Comment = mongoose.model('comment', CommentSchema)