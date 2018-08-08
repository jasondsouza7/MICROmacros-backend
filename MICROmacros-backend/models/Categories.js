const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = {
    name: {
        type: String,
        required: true
    },
    restaurant: {
        type: String, 
        required: true
    },
    created_date:{
        type: Date,
        default: date.now   
    },
    created_by:{
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    update_date:{
        type: Date,
        required: true
    },
    updated_by:{
        type: Schema.Types.ObjectId,
        ref: "Users"
    }
}

module.exports= Categories = mongoose.model('Categories', CategoriesSchema);