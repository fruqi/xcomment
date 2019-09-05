// setup express project
// create hello world for index
// accept json as input
// use hexagonal architecture
// todo: hook it up to mongodb
// todo: post comment
// todo: get comment
// todo: delete comment

const express = require('express');
const app = express();
const commentHandler = require('./adapter/http/CommentHandler');
const memberHandler = require('./adapter/http/MemberHandler');

const PORT = process.env.PORT || 5000;

// Parse incoming JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.json({msg: 'hello mars'})
});

app.use("/orgs/:org/comments", (req, res, next) => {
  req.org = req.params.org;
  next();
}, commentHandler);

app.use("/orgs/:org/members", (req, res, next) => {
  req.org = req.params.org;
  next();
}, memberHandler)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
