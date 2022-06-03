const jwt = require('jsonwebtoken');
const authService = require('../service/authService');
const handleSubmitError = require('../error/authErrorHandler');

const MAX_AGE = 3 * 24 * 60 * 60;

class AuthController {
    async signup_get(req, res) {
        res.render('signup');
    }

    async login_get(req, res) {
        res.render('login');
    }

    async logout_get(req, res) {
        res.redirect('/');
    }

    async signup_post(req, res) {
        const { login, password } = req.body;
        try {
            const user = await authService.signup({
                login: login,
                password: password,
            });
            const token = createToken(user.user_id);
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: MAX_AGE * 1000,
            });
            res.status(201).json({ user: user.user_id });
        } catch (err) {
            const errors = handleSubmitError(err);
            res.status(400).json({ errors });
        }
    }

    async login_post(req, res) {
        const { login, password } = req.body;
        try {
            const user = await authService.login(login, password);
            const token = createToken(user.user_id);
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: MAX_AGE * 1000,
            });
            res.status(200).json({ user: user.user_id });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async getAll(req, res) {
        const result = await authService.getAll();
        res.json(result);
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: MAX_AGE,
    });
};

module.exports = new AuthController();
