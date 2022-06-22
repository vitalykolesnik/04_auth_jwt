//DATABASE MOCK
const { facts, recipes } = require('../models/data');

const getHome = (req, res) => {
    res.render('home', { login: res.locals.userLogin, facts: facts });
};

const getCatalog = (req, res) => {
    res.render('catalog', {
        login: res.locals.userLogin,
        recipes: recipes,
    });
};

const errorRoute = (req, res) => {
    res.render('404');
};

module.exports = { getHome, getCatalog, errorRoute };
