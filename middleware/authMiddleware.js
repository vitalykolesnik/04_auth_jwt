const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) return res.redirect('/login');

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            res.redirect('/login');
        }
        next();
    });
};

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        res.locals.userLogin = null;
        return next();
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            res.locals.userLogin = null;
            return next();
        }
        // console.log(decodedToken);
        if (!decodedToken) {
            res.locals.userLogin = null;
            return next();
        }
        const user = decodedToken.login;
        res.locals.userLogin = user;
        next();
    });
};

module.exports = { requireAuth, checkUser };
