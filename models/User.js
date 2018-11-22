const db = require('./db');

class User {
  constructor(id, name, username, email, password) {
    this.id = id,
      this.name = name,
      this.username = username,
      this.email = email,
      this.password = password
  }
  // CREATE
  static addUser(name, username, email, password) {
    return db.result(`insert into users
      (name, username, email, password)
        values
        ($1,$2,$3,$4)`, [name, username, email, password]);
  }
  // RETRIEVE
  static getAllUsers() {
    return db.any(`select * from users`);
  }

  static getUserById(id) {
    return db.one(`select * from users where id=$1`, [id]);
  }

  static getUserByEmail(email) {
    return db.one(`select * from users where email ilike '%$1:raw%'`, [email]);
  }

  // UPDATE
  updateName(newName) {
    return db.result(`
      update users
      set name = $1
      where id = $2
    `, [newName, this.id]);
  }

  updateUsername(newUsername) {
    return db.result(`
      update users
      set username = $1
      where id = $2
    `, [newUsername, this.id]);
  }

  // DELETE
  deleteAccount() {
    return db.result(`
    delete * from users where id = $1
  `, [this.id]);
  }
}



module.exports = User;