const authService = require('../service/authService');
const handleAuthError = require('../error/authErrorHandler');

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
            const result = await authService.signup({
                username: login,
                password: password,
            });
            res.json(result);
        } catch (err) {
            res.status(400).json(handleAuthError(err));
        }
    }

    async login_post(req, res) {
        res.send('login post');
    }

    async getAll(req, res) {
        const result = await authService.getAll();
        res.json(result);
    }
}

module.exports = new AuthController();
