//DATABASE MOCK
const { facts, recipes } = require('../models/data');
let isAuth = false;

const getHome = (req, res) => {
    res.render('home', { isAuth, facts: facts });
};

const getCatalog = (req, res) => {
    res.render('catalog', { isAuth, recipes: recipes });
};

const errorRoute = (req, res) => {
    res.render('404');
};

module.exports = { getHome, getCatalog, errorRoute };
