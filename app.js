require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const router = require('./router');

const PORT = process.env.PORT || 5000;

app.set('view engine', 'pug');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
