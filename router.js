const controller = require('./controller');
const { Router } = require('express');
const router = new Router();

router.get('/', controller.getHome);
router.get('/catalog', controller.getCatalog);
router.get('*', controller.getHome);

module.exports = router;
