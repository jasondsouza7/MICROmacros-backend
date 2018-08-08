const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const fault = require('../../utilities/Errors');

require('../../models/Restaurant');
const Restaurant = require('../../models/Restaurant');

router.get('/', (req, res)=>{

    const restaurant_name = req.body.name;
    const location = req.body.location;     //return in order of closeness ***

    Restaurant.findOne({ restaurant_name }).then(Restaurant => {
        //Check for the restaurant
        if(!Restaurant){
            return res.status(404).json(fault(259));
        }
        else{
            return res.json(Restaurant);   
        }
    })
});

module.exports = router;