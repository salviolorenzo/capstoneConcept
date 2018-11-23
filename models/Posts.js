const db = require('./db');

class Post {
  constructor(id, content, score) {
    this.id = id,
      this.content = content,
      this.score = score
  }


  // CREATE
  static add(content, score, owner_id) {
    return db.one(`insert into posts
    (content, score, owner_id)
    values
    ($1, $2, $3)`,
      [content, score, owner_id]);
  }

  // RETRIEVE
  static getAll() {
    return db.any(`select * from posts`);
  }

  static getById(id) {
    return db.one(`select * from posts where id=$1`, [id]);
  }

  static getByOwner(owner_id) {
    return db.any(`select * from posts
      inner join 
      peopleYouFollow p
      on p.id = owner_id
      where owner_id = $1
      order by date asc
    `, [owner_id])
  }

  // UPDATE

  // DELETE
}

module.exports = Post;