const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const fault = require('../../utilities/Errors');

require('../../models/Cuisines');
const Cuisine = require('../../models/Cuisines');

router.post('/', (req, res) => {

    Cuisine.findOne({ name: req.body.cuisine_name }).then(Cuisine => {
    if(Cuisine) {
        return res.status(400).json(fault(265));
    }else{
    const newCuisine = new Cuisine({
            cuisine_name : req.body.cuisine_name,
            dish_created_date: Date.now,
            dish_created_by: req.body.user,
            dish_updated_date: Date.now,
            dish_updated_by: req.body.user
    });

    newCuisine
    .save()
    .then(Dish => res.json(Cuisine))
    .catch(err => res.json(err));
    }
    });

});


module.exports = router;