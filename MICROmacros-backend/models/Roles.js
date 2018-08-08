const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolesSchema = new Schema({
    role_name:{
        type: String,
        required: true
    }
});


module.exports= mongoose.model('roles', RolesSchema);