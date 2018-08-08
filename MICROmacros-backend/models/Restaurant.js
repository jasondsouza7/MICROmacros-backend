const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },//check for array for array's validation 
    location: [{
       location_name:{
            type: Schema.Types.ObjectId,
            required: true
       }  
    }],
    created_date:{
        type: Date,
        default: Date.now,
        required: false
    },
    created_by:{
        type: String,
        required: true
    },
    updated_date:{
        type: Date,
        default: Date.now,
        required: true
    },
    updated_by:{
        type: String,
        required: true
    }, 
    sublocality_level_1:{   //street name
        type: String,
    },
    locality: {         //area name - barsha etc. 
        type: Stirng
    },
    administrative_area_level_1:{   //idkwtfthis is 
        type: String
    },
    country: {
        type: String,
        required: true
    },
    delivers:{
        type: Boolean,
        required: true
    },
    cuisines:[{
        type: Schema.Types.ObjectId,
    }]
});

module.exports= Restaurant = mongoose.model('restaurants', RestaurantSchema);
