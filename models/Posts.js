const db = require('./db');

class Post {
  constructor(id, content, score) {
    this.id = id,
      this.content = content,
      this.score = score
  }

  static add(content, score, owner_id) {
    return db.one(`insert into posts
    (content, score, owner_id)
    values
    ($1, $2, $3)`,
      [content, score, owner_id]);
  }
}

module.exports = Post;