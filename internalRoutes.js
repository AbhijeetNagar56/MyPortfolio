const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});


router.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/project.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
});


module.exports = router;


