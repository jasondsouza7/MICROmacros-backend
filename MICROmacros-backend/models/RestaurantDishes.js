const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantDishesSchema = {
    restaurant:{
        type: Schema.Types.ObjectId,
        ref: "Restaurant"   //need to run a function called populate
    },
    dish: {
        type: Schema.Types.ObjectId,
        ref: "Dishes"      //need to run a function called populate
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





module.exports= RestaurantDishes = mongoose.model('restaurantsDishes', RestaurantDishesSchema);