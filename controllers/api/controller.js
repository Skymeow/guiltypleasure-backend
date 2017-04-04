const FoodService = require('../../services/nutritionix');

let controller = {};

controller.getFoodinfoByName = (req, res) => {
  FoodService
    .getFoodinfoByName(req.body.name)
    .then((results) => {
      results.json()
    .then((data) => {
      res.send(data)
    })
  })
  .catch((err) => {
    console.log('Error', err);
  })
}

controller.getCaloriesByexercise = (req, res) => {
  console.log("BACKEND API CONTROLLER", req.body)
  FoodService
    .getCaloriesByexercise(req.body.yoga_min,req.body.ran_miles,req.body.ran_hours,req.body.walk_miles,req.body.walk_hours,req.body.spin_min,req.body.gender,req.body.weight_kg,req.body.height_cm,req.body.age)
    .then((results) => {
      results.json()
    .then((data) => {
      console.log('%%%%%calories', data)
      res.send(data)
    })
  })
    .catch((err) => {
      console.log('Error', err);
    })
}

module.exports = controller;
