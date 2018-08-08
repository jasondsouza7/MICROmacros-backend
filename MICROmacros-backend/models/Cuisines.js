const CuisineSchema = new Schema({
    cuisine_name:{
        type: String, 
        required: true
    },
    dish_created_date:{
        type: date.now,
        required: true
    },
    dish_created_by:{
        type: String,
        required: true
    },
    dish_updated_date:{
        type: Date,
        required: true
    },
    dish_updated_by:{
        type: String,
        required: true
    }
});

module.exports= Cuisines = mongoose.model('cuisines', CuisineSchema);