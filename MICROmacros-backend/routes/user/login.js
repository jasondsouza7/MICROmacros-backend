const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const fault = require('../../utilities/Errors');

require('../../models/User');
const User = require('../../models/User');

// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/', (req, res) => {
 
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }, 'password').then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json(fault(257));
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched

        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secret,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res.status(400).json(fault(258));
      }
    });
  });
});


module.exports = router;