const router = require('express').Router();

router.use('/saved_food', require('./controllers/food/index.js'));
router.use('/users', require('./controllers/users/index.js'));
router.use('/api', require('./controllers/api/index.js'));

module.exports = router;
