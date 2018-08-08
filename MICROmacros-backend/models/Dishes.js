const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DishesSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    dish_category:{
        type: Schema.Types.ObjectId,
        required: true
    },
    created_date:{
        type: Date,
        required: Date.Now()
    },
    created_by:{
        type: Schema.Types.ObjectId,
        required: true
    },
    updated_date:{
        type: Date,
        required: true
    },
    updated_by:{
        type: String,
        required: true
    }
});

module.exports= Dishes = mongoose.model('dishes', DishesSchema);