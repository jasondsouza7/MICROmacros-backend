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

const Branch = mongoose.model('branch', BranchesSchema);
module.exports = Branch