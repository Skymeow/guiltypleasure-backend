const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.create);
router.get('/',controller.index);

router.delete('/:food_id', controller.destroy);
module.exports = router;
