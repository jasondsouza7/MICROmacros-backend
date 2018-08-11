const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolesSchema = new Schema({
    role_name:{
        type: String,
        required: true
    }
});


const Role = mongoose.model('role', RolesSchema);
module.exports = Role;