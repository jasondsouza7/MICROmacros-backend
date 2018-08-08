const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CuisineSchema = new Schema({
    cuisine_name:{
        type: String, 
        required: true
    },
    dish_created_date:{
        type: Date,
        required: true
    },
    dish_created_by:{
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    dish_updated_date:{
        type: Date,
        required: true
    },
    dish_updated_by:{
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
});

module.exports= mongoose.model('cuisines', CuisineSchema);