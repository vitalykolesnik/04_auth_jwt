const mainController = require('../controller/mainController');
const { Router } = require('express');
const authRoute = require('./authRoute');
const router = new Router();

router.use(authRoute);
router.get('/', mainController.getHome);
router.get('/catalog', mainController.getCatalog);

module.exports = router;
