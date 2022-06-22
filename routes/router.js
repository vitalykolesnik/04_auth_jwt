const mainController = require('../controller/mainController');
const { Router } = require('express');
const authRouter = require('./authRouter');
const cookieRouter = require('./cookieRouter');
const {
    requireAuth,
    checkUser,
} = require('../middleware/authMiddleware');
const router = new Router();

router.get('*', checkUser);
router.use(authRouter);
router.use(cookieRouter);
router.get('/', mainController.getHome);
router.get('/catalog', requireAuth, mainController.getCatalog);

module.exports = router;
