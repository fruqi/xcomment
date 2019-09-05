const express = require('express');
const router = express.Router();
const GithubRepository = require('../repository/GithubRepository');
const memberRepository = new GithubRepository();


router.get("/", (req, res) => {
  memberRepository.membersForOrg(req.org)
    .then( result => {
      res.json(result);
    }
  )
});

module.exports = router;