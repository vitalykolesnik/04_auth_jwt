require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db_connect');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

const router = require('./routes/router');

const PORT = process.env.PORT || 5000;

app.set('view engine', 'pug');

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true });
        app.listen(PORT, () =>
            console.log(`Server started at port ${PORT}...`)
        );
    } catch (err) {
        console.log(err.message);
    }
};

start();
