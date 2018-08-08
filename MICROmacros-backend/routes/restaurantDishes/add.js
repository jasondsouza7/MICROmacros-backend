const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const fault = require('../../utilities/Errors');

require('../../models/Restaurant');
require('../../models/Dishes');
require('../../models/RestaurantDishes');
const Restaurant = require('../../models/Restaurant');
const Dish = require('../../models/Dishes');
const RestDish = require('../../models/RestaurantDishes');

router.post('/', (req, res) => {

Restaurant.findOne({ name: req.body.resturant_name }).then(restaurant => {
    if(restaurant){
        Dish.findOne({ name: req.body.dish_name}).then(dish => {
            if(dish){
                return res.status(400).json(fault(262));
            }
            else{
            const newRestDish = new restDish({
            resturant: req.body.Restaurant,
            dish: req.body.Dish,
            created_date: date.now ,
            update_date: date.now
            });

            newRestDish
            .save()
            .then(restDish => res.json(restDish))
            .catch(err => res.json(err));
            }
        });
    }else{
        return res.status(404).json(fault(259));
    }
});
});



module.exports = router;