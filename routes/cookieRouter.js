const { Router } = require('express');
const router = Router();

router.get('/set-cookie', (req, res) => {
    // res.setHeader('Set-Cookie', 'newUser=true');
    res.cookie('newUser', true);
    res.cookie('isEmployer', true, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        secure: true,
        SameSite: 'Strict',
    });
    res.send('you get a cookie');
});

router.get('/read-cookie', (req, res) => {
    const cookies = req.cookies;
    console.log(`Read cookie "newUser": ${cookies.newUser}`);
    res.json(cookies);
});

module.exports = router;
