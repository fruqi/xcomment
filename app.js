// setup express project
// create hello world for index
// accept json as input
// use hexagonal architecture
// hook it up to mongodb
// post comment
// get comment
// delete comment
// todo: integration test
// todo: add swagger file

const express = require('express')
const commentHandler = require('./adapter/http/CommentHandler')
const memberHandler = require('./adapter/http/MemberHandler')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 5000

// Parse incoming JSON
app.use(express.json())

// Connect to MongoDB
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/xcomment'

mongoose.connect(mongoUrl,  { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

app.get("/", (req, res) => {
  res.json({msg: 'hello, please read the README.md file'})
})

app.use("/orgs/:org/comments", (req, res, next) => {
  req.org = req.params.org
  req.comment = req.body.comment
  console.log('comment', req.comment)
  next()
}, commentHandler)

app.use("/orgs/:org/members", (req, res, next) => {
  req.org = req.params.org
  next()
}, memberHandler)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
