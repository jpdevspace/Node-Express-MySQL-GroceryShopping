const express = require('express');
const router = express.Router();
const orm = require('../config/orm.js'); // MySQL CRUD functions 


const test = 'Indeed I am working!!!';

// GET - Home Route
router.get('/', (req, res) => {
    console.log(orm.selectAll());
    res.render('index', { test });
});

module.exports = router;