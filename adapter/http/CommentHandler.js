const express = require('express');
const router = express.Router();
// todo: remove with real data
const comments = require('../../CommentFixture');

router.get("/", (req, res) => {
  console.log(`GET - ${req.org}`)
  res.json(comments)
});

router.post("/", (req, res) => {
  console.log(`POST - ${req.org}`)
  res.json({msg: 'yo'})
});

router.delete("/", (req, res) => {
  console.log(`DELETE - ${req.org}`)
  res.json({msg: 'deleted successfully'})
})

module.exports = router;