const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const fault = require('../utilities/Errors');


const Dish = require('../../models/Dishes');
const RestDish = require('../../models/RestaurantDishes');

router.get('/', (req,res)=> {

    const dish_name = req.body.dish_name;
    const dish_category = req.body.dish_category;

    Dish.findOne({ dish_name }).then(Dish => {
        //Check for the dish here ! 
        if (!Dish){
            return res.status(404).json(fault(261));
        }else{
            return res.json(RestDish);
        }
    })
});


module.exports = router;