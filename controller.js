//DATABASE MOCK
const { facts, recipes } = require('./data/data');

const getHome = (req, res) => {
    res.render('home', { facts: facts });
};

const getCatalog = (req, res) => {
    res.render('catalog', { recipes: recipes });
};

const errorRoute = (req, res) => {
    res.render('404');
};

module.exports = { getHome, getCatalog, errorRoute };
