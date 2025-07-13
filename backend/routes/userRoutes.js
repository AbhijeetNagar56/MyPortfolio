const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});


router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/signup.html'));
});

router.get('/terms', (req, res) => {
    res.send("Terms and condition are on the way");
});

router.get('/services', (req, res) => {
    res.send("services are on the way please go back");
});



module.exports = router;