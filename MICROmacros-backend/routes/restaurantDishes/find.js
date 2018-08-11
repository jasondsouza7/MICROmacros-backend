const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
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

router.get('/', (req,res, next)=> {
    const restaurant_name = req.body.restaurant_name;
    const dish_name = req.body.dish_name;
    const restdish_name = req.body.restdish_name;
    
    Restaurant.findOne({ restaurant_name }).then(Restaurant => {
        //Check for the dish here ! 
        if (!Restaurant){
            return res.status(404).json(fault(259));
        }else{
            RestDish.findById({ Restaurant }).then(RestDish => {
                if(!RestDish){
                    return res.status(404).json(fault(263));
                }else{
                    return res.json(RestDish);
                }
            });
        }
    });
});


module.exports = router;