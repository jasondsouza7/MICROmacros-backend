const express = require('express')
const router = express.Router()
module.exports = router;

const Errors = {
    "400" : "success",
    "250": "Error generating hashed token",
    "251": "Email already exists",
    "252" : "Cannot find location",
    "253" : "Cannot location record",
    "254" : "Cannot access table",
    "255" : "Service is down",
    "256" : "Cannot authenticate User",
    "257" : "User does not exist",
    "258" : "Password does not match",
    "259" : "Cannot find Restaurant",
    "260" : "Restaurant already exists",
    "261" : "Cannot find Dish",
    "262" : "Dish already exists",
    "263" : "Cannot find menu for this restaurant",
    "264" : "Cannot find this Cuisine",
    "265" : "This Cuisine already exists",

}


const fault = function generateError(ErrCode){
    
return new Error(Errors[ErrCode]);

}
module.exports = fault;