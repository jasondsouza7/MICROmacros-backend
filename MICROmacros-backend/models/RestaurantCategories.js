const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantCategoriesSchema = {
    restaurant:{
        type: Schema.Types.ObjectId,
        ref: "Restaurant"   //need to run a function called populate
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Categories"      //need to run a function called populate
    },
    created_date:{
        type: Date,
        default: date.now
    },
    update_date:{
        type: Date,
        required: true,
    }
}


module.exports= RestaurantCategories = mongoose.model('restaurantsCategories', RestaurantCategoriesSchema);