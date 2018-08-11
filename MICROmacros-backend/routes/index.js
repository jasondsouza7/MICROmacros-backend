'use strict';

const express = require('express')
const router = express.Router()
module.exports = router;

router.get('/', (err, req, res, next) => {
    console.log(err);
    res.jsonSuccess()
});