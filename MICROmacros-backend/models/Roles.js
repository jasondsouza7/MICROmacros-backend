const RolesSchema = new Schema({
    role_name:{
        type: String,
        required: true
    }
});


module.exports= Roles = mongoose.model('roles', RolesSchema);