const db = require(`./db`);

class News {
  constructor(id, title, date, content, score) {
    this.id = id,
      this.title = title,
      this.date = date,
      this.content = content,
      this.score = score
  }

  // CREATE
  static add(title, date, content, score) {
    return db.one(
      `insert into news
      (title, date, content, score)
      values
      ($1, $2, $3, $4)`, [title, date, content, score]
    )
  }
  // RETRIEVE
  static getAll() {
    return db.any(
      `select * from news`
    )
  }

  static getByPerson(about_id) {
    return db.any(
      `select * from news
      inner join
      peopleYouFollow p
      on p.id = about_id
      where about_id = $1
      order by date asc
      `, [about_id]
    )
  }


  // UPDATE

  // DELETE
  static delete(id){
    return db.result(
      `delete * from news where id =$1`, [id]
    )
  }


}