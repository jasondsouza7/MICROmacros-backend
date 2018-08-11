const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const fault = require('../../utilities/Errors');

// Load User model
require('../../models/User');
const User = require('../../models/User');


router.post('/', (req, res, next) => {
 
    User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).send(fault(251));
      // console.log(fault(251));  
      // return res.status(400).json(fault(251));
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', // Size
          r: 'pg', // Rating
          d: 'mm' // Default
        });
  
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });
  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw fault(250);
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))       //
              .catch(err => res.json(err));    //.cath(err => jsonError(err))
          });
        });
      }
    });
  });

  module.exports = router;