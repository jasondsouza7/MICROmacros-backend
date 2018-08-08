const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BranchesSchema = new Schema({
    latitude:{
        type: String,
        //required: true
    },
    longitude:{
        type: String,
        //required: true
    }     
});

module.exports= mongoose.model('branches', BranchesSchema);