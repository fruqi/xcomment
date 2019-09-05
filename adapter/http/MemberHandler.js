const express = require('express');
const router = express.Router();
const GithubMemberRepository = require('../repository/github/GithubMemberRepository');
const memberRepository = new GithubMemberRepository();


router.get("/", (req, res) => {
  memberRepository.membersForOrg(req.org)
    .then( result => {
      res.json(result);
    }
  )
});

module.exports = router;