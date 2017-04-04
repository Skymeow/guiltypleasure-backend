const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');
const Food = require('../../models/food');

const controller = {};

controller.authorizeToken = (req, res) => {
  jwt.verify(req.headers.authorization, "taco cat", (err, encoded) => {
    if (err) {
      console.log(err);
      res
        .status(401)
        .json({ error: err.message });
    } else {
      Food
        .findByUserEmail(decoded.email)
        .then((data) => {
          res.json({
            data: data,
            user_id: decoded.user_id
          });
        })
        .catch((err) => {
          console.log('ERROR', err);
        })
        console.log('Json Decoded', decoded);
    }
  })
}

controller.create = (req, res) => {
  console.log('.......req body controller', req.body)
  User
    .create(req.body.user)
    .then((data) => {
      res.status(201)
      res.json({ user: data})
    })
    .catch(err => console.log('Error', err));
};

controller.login = (req, res) => {
  User
    .findByEmail(req.body.user.email)
    .then((user) => {
      if (user) {
        const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest);
        if (isAuthed) {
          const token = jwt.sign({
            email: user.email,
            user_id: user.id
          }, 'taco cat', { expiresIn: '7d' });
          res.json({ token });
        } else {
          res.sendStatus(401);
        }
      } else {
        res.status(404)
        .json({ error: "NO user found" });
      }
    });
}

module.exports = controller;




















