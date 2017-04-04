const bcrypt = require('bcrypt');
const db = require('../config/db');

const User = {};

User.create = (user) => {
  const password = bcrypt.hashSync(user.password_digest, 10);
  return db.one(`
    INSERT INTO users
    (username, email, gender, weight, height, age, password_digest)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [
      user.username,
      user.email,
      user.gender,
      user.weight,
      user.height,
      password
    ]
  );
};

User.findByEmail = (email) => {
  return db.oneOrNone(`
    SELETE * FROM users
    WHERE email = $1;`,
    [email]
  );
};

User.delete = (user) => {
  return db.none(`
    DELETE FROM users
    WHERE id = $1`,
    [user]
  );
};

module.exports = User;