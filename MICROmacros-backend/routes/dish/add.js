const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const fault = require('../../utilities/Errors');

require('../../models/Dishes');
const Dish = require('../../models/Dishes');

router.post('/', (req, res, next) => {

    Dish.findOne({ name: req.body.dish_name }).then(Dish => {
    if(Dish) {
        return res.status(400).json(fault(262));
    }else{
    const newDish = new Dish({
        name : req.body.dish_name,
        category: req.body.dish_category,
        created_date: Date.now,
        created_by: req.body.user,
        updated_date: Date.now,
        updated_by: req.body.user,
    });

    newDish
    .save()
    .then(Dish => res.json(Dish))
    .catch(err => res.json(err));
    }
    });

});


module.exports = router;