const User = require('../models/app_user');

class AuthService {
    async login() {}

    async logout() {}

    async signup(user) {
        const candidate = await User.create({
            username: user.username,
            password: user.password,
        });
        return candidate;
    }

    async getAuthStatus() {
        return false;
    }

    async getAll() {
        const users = await User.findAll();
        return users;
    }
}

module.exports = new AuthService();
