const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.getFoodinfoByName);

router.post('/calories', controller.getCaloriesByexercise);

module.exports = router;
