const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const UserSchema = new Schema({
    firstname: {
        type: String, 
        required: true
    }, 
    lastname: {
        type: String, 
        required: true
    },
    role: {
        type: String, 
        default: 'client'
    },  
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select : false
    },
    avatar: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    },
    active:{
        type: boolean
    }
});



module.exports= User = mongoose.model('users', UserSchema);






//module.exports= User = mongoose.model('users', UserSchema);
