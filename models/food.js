const db = require('../config/db');

const Food = {};

Food.addToFavorites = (food,amount) => {
  return db.one(
    `INSERT INTO saved_food
     (name, picture, calories, serving_qty, serving_unit, amount)
     VALUES
     ($1, $2, $3, $4, $5, $6) RETURNING *`,
     [food.name, food.picture, parseInt(food.calories), parseInt(food.serving_qty), food.serving_unit, parseInt(amount)]
    );
}

Food.findAll=()=>{
  return db.query(`
    SELECT * FROM
    saved_food;`
   )
}

Food.delete = (foodId) => {
  return db.none(
    `DELETE FROM saved_food
     WHERE id = $1`,
     [foodId]
  );
}

// Food.update = (amount,foodId) => {
//   return db.query(`
//     UPDATE saved_food
//     SET amount = $1
//     WHERE id = $2`,
//     [amount,foodId]
//   );
// }
// Food.findByUserEmail = (email) => {
//   return db.query(
//     `SELETE
//        saved_food.id,
//        saved_food.name,
//        saved_food.picture,
//        saved_food.calories,
//        users.email,
//        users.username,
//        users.gender,
//        users.height,
//        users.weight,
//        users.age,
//        user_id
//      FROM saved_food
//      LEFT OUTER JOIN users
//      ON users.id = saved_food.user_id
//      WHERE email = $1`,
//      [email]
//   );
// }

module.exports = Food;
