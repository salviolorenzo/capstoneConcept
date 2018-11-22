const db = require('./db');

class People {
  constructor(id, name, username, avg_score, category, reach) {
    this.id = id,
      this.name = name,
      this.username = username,
      this.avg_score = avg_score,
      this.category = category,
      this.reach = reach
  }

  static add(name, username, avg_score, category, reach) {
    return db.one(`insert into peopleYouFollow
      (name, username, avg_score, category, reach)
      values
      ($1, $2, $3, $4, $5)
    `,
      [name, username, avg_score, category, reach])
  }
}