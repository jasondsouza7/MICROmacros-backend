const express = require('express');
const mongoose = require('mongoose');
const glob = require('glob');
const _ =require('lodash');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
//const bcrypt = require('bcryptjs');
const fs = require('fs');

//bodyParser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./models/index');
//Passport config file
require('./config/passport')(passport);

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
.connect(db,{useNewUrlParser:true})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// app.get('/', (req,res) => {
//     res.json({
//         "msg": "hello"
//     });
// });

// app.use('/users', users);
// app.use('/restaurants', restaurants);

// app.get('/dashboard', passport.authenticate('jwt', {session: false}),
// (req,res) => res.json({
//     msg: "This is the private dashboard"
// }));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));

// Compile all routers   
var routeFolders = [],     
routePaths = "./routes"   
glob.sync('**/*', { cwd: routePaths }).forEach(route => {     
    var _isFolder = !_.endsWith(route, '.js')     
    route = '/' + route.replace(/\.[^/.]+$/, '')     
    if (!_.endsWith(route, 'index')) {       
        var _router = require(routePaths + route)       
        app.use(route, _router)       
        if (_isFolder) routeFolders.push(route)     }   })   
        routeFolders.forEach(route => {     var _pathDeindex = routePaths + route + '/deindex.js'     
        if (fs.existsSync(_pathDeindex))       
        app.use(route, require(_pathDeindex))   
    })