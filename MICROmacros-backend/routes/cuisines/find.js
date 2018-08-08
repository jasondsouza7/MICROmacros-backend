const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const fault = require('../../utilities/Errors');


const Cuisine = require('../../models/Cuisines');

router.get('/', (req,res)=> {

    const cuisine_name = req.body.cuisine_name;

    Cuisine.findOne({ cuisine_name }).then(Cuisine => {
        //Check for the dish here ! 
        if (!Cuisine){
            return res.status(404).json(fault(264));
        }else{
            return res.json(Cuisine);
        }
    })
});


module.exports = router;