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
        default: Date.now   
    },
    created_by:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    update_date:{
        type: Date,
        required: true
    },
    updated_by:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}

const Category = mongoose.model('Category', CategoriesSchema);
module.exports = Category;