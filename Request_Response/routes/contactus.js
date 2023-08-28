const path = require('path');

const express = require('express');
const rootDir = require('../util/path');
const contactusController = require('./controllers/contactus.js');

const router = express.Router();

router.get('contactus', contactusController);

router.post('contactus', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');

});

module.exports = router;