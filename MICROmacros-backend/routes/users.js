// 
// const express = require('express');
// const router = express.Router();
// const gravatar = require('gravatar');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const keys = require('../config/keys');
// const passport = require('passport');
// const fault = require('../utilities/Errors');

// // Load User model
// const User = require('../models/User');

// // @route   GET api/users/test
// // @desc    Tests users route
// // @access  Public
// router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// router.post('/register', (req, res) => {
 
//   User.findOne({ email: req.body.email }).then(user => {
//   if (user) {
//       return res.status(400).json({email:"Email already exists"});
//     } else {
//       const avatar = gravatar.url(req.body.email, {
//         s: '200', // Size
//         r: 'pg', // Rating
//         d: 'mm' // Default
//       });

//       const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         avatar,
//         password: req.body.password
//       });

//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw fault(250);
//           newUser.password = hash;
//           newUser
//             .save()
//             .then(user => res.json(user))       //
//             .catch(err => res.json(err));    //.cath(err => jsonError(err))
//         });
//       });
//     }
//   });
// });
// // @desc    Login User / Returning JWT Token
// // @access  Public
// router.post('/login', (req, res) => {
 
//   const email = req.body.email;
//   const password = req.body.password;

//   // Find user by email
//   User.findOne({ email }).then(user => {
//     // Check for user
//     if (!user) {
//       return res.status(404).json({email:'User not found'});
//     }

//     // Check Password
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         // User Matched

//         const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload

//         // Sign Token
//         jwt.sign(
//           payload,
//           keys.secret,
//           { expiresIn: 3600 },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: 'Bearer ' + token
//             });
//           }
//         );
//       } else {
//         return res.status(400).json({email:'Password incorrect'});
//       }
//     });
//   });
// });


// module.exports = router;