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

router.post('/', (req, res, next) => {

Restaurant.findOne({ name: req.body.restaurant_name }).then(restaurant => {
if (restaurant) {
    return res.status(400).send(fault(260));
}else{
    console.log("Creating new Restaurant");
   const newRestaurant = new Restaurant({
       name : req.body.restaurant_name,
       location: req.body.location,
       created_date: Date.now,
       created_by: req.body.created_by,
       updated_date: Date.now,
       updated_by: req.body.updated_by,
       sublocality_level_1: req.body.sublocality_level_1,
       locality: req.body.locality,
       administrative_area_1: req.body.administrative_area_1,
       country: req.body.country,
       delivers: req.body.delivers,
       cuisines: req.body.cuisines
   });

   newRestaurant
   .save()
   .then(restaurant => res.json(restaurant))
   //.then(restaurant => res.json(restaurant))
   .catch(err => res.json(err));
}
});

});


module.exports = router;