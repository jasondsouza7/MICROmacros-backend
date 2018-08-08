const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const fault = require('../../utilities/Errors');

require('../../models/Restaurant');
const Restaurant = require('../../models/Restaurant');

router.post('/', (req, res) => {

Resturant.findOne({ restaurant_name: req.body.restaurant_name }).then(Restaurant => {
if(Restaurant) {
    return res.status(400).json(fault(260));
}else{
   const newRestaurant = new Restaurant({
       restaurant_name : req.body.restaurant_name,
       location: req.body.location,
       created_date: Date.now,
       created_by: req.body.user,
       updated_date: Date.now,
       updated_by: req.body.user,
       sublocality_level_1: req.body.sublocality_level_1,
       locality: req.body.locality,
       administrative_area_1: req.body.administrative_area_1,
       country: req.body.country,
       delivers: req.body.delivers,
       cuisines: req.body.cuisines
   });

   newRestaurant
   .save()
   .then(Restaurant => res.json(Restaurant))
   .catch(err => res.json(err));
}
});

});


module.exports = router;