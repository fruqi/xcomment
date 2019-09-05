const Comment = require('../../../application/Comment')

class MongoCommentRepository {

  async orgComments(org) {
    const result = await Comment.find({
      org: org
    }, {
      comment: 1,
      _id: 0
    })

    return result
  }

  async deleteOrgComments(org) {
    const result = await Comment.updateMany({
      org: org
    }, { deleted: true } )

    return result
  }

  async addComment(comment, org) {
    console.log('addComment', comment, org)
    const result = await new Comment({
      comment: comment,
      org: org
    }).save()

    // const result = await comment.save()
    return result
  }

}

module.exports = MongoCommentRepository