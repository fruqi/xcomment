const Comment = require('../application/Comment');

describe('Comment', () => {
  it('should contain a message', () => {
    const helloMessage = 'hello';
    const comment = new Comment(helloMessage);
    expect(comment.message).toEqual(helloMessage);
  });

})
