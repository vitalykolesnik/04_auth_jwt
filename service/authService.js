const bcrypt = require('bcrypt');
const User = require('../models/app_user');

class AuthService {
    async login(login, password) {
        const user = await User.findOne({
            where: { login: login },
        });
        if (!user) {
            throw Error('incorrect login');
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            throw Error('incorrect password');
        }
        return user;
    }

    async logout() {}

    async signup(user) {
        const candidate = await User.create({
            login: user.login,
            password: user.password,
        });
        return candidate;
    }

    async getAll() {
        const users = await User.findAll();
        return users;
    }
}

module.exports = new AuthService();
