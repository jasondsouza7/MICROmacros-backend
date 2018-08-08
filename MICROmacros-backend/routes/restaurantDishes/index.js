'use strict';

const express = require('express')
const router = express.Router()
const authAccess = require('../../middleware/authAccess');


module.exports = router;

router.get(
    '/',
    authAccess
//(req,res) => {
    //res.jsonSuccess()
//}
)