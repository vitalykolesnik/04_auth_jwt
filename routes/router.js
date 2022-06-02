const mainController = require('../controller/mainController');
const { Router } = require('express');
const authRouter = require('./authRouter');
const cookieRouter = require('./cookieRouter');
const router = new Router();

router.use(authRouter);
router.use(cookieRouter);
router.get('/', mainController.getHome);
router.get('/catalog', mainController.getCatalog);

module.exports = router;
