const sequelize = require('../config/db_connect');
const { DataTypes, Op } = require('sequelize');

const User = sequelize.define('app_user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [3, 30],
                msg: 'username must contain 3-30 chars',
            },
        },
        unique: {
            args: true,
            msg: 'username already exists',
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: 5,
                msg: 'password must be bigger than 4 chars',
            },
        },
    },
});

module.exports = User;
