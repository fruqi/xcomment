const express = require('express')
const router = express.Router()
const MongoCommentRepository = require('../repository/mongo/MongoCommentRepository')
const commentRepository = new MongoCommentRepository()
const GithubOrgRepository = require('../repository/github/GithubOrgRepository')
const orgRepository = new GithubOrgRepository()

router.get("/", async (req, res) => {
  console.log(`GET comments - ${req.org}`)

  // todo: refactor isExist
  const isExist = await orgRepository.isOrgExist(req.org)

  if (!isExist) {
    return res.status(404).json({ msg: `Organization doesn't exist`})
  }

  commentRepository.orgComments(req.org)
    .then( data => {
      res.json(data)
    })
    .catch( err => {
      console.log(err)
      res.json({msg: 'something went wrong'})
    })
})

router.post("/", async (req, res) => {
  console.log(`POST comments - `, req.org)

  // todo: refactor isExist
  const isExist = await orgRepository.isOrgExist(req.org)

  if (!isExist) {
    return res.status(404).json({ msg: `Organization doesn't exist`})
  }

  commentRepository.addComment(req.comment, req.org)
    .then(data => {
      res.json(data)
    })
    .catch( err => {
      console.log(err)
      res.json({ msg: err._message })
    })
})

router.delete("/", async (req, res) => {
  console.log(`DELETE comments - ${req.org}`)

  // todo: refactor isExist
  const isExist = await orgRepository.isOrgExist(req.org)

  if (!isExist) {
    return res.status(404).json({ msg: `Organization doesn't exist`})
  }

  commentRepository.deleteOrgComments(req.org)
    .then( data => res.json(data) )
    .catch( err => {
      console.log(err)
      res.json({ msg: err.errors })
    })
})

module.exports = router