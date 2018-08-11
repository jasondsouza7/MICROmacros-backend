const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DishesSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    dish_category:{
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    created_date:{
        type: Date,
        required: Date.now
    },
    created_by:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    updated_date:{
        type: Date,
        required: true
    },
    updated_by:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Dish = mongoose.model('dish', DishesSchema);
module.exports = Dish;