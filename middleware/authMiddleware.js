const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) return res.redirect('/login');

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            console.log(err.message);
            res.redirect('/login');
        }
        console.log(decodedToken);
        next();
    });
};

module.exports = requireAuth;
