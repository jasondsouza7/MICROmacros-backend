const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantCategoriesSchema = {
    restaurant:{
        type: Schema.Types.ObjectId,
        ref: "Restaurant"   //need to run a function called populate
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"      //need to run a function called populate
    },
    created_date:{
        type: Date,
        default: Date.now
    },
    update_date:{
        type: Date,
        required: true,
    }
}


const RestaurantCategories = mongoose.model('restaurantsCategories', RestaurantCategoriesSchema);
module.exports = RestaurantCategories;