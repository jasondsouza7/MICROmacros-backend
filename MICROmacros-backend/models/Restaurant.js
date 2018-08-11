const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },//check for array for array's validation 
    location: [{
       location_name:{
            type: Schema.Types.ObjectId,
            ref: "Branch"
            //required: true
       }  
    }],
    created_date:{
        type: Date,
        default: Date.now,
        required: false
    },
    created_by:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    updated_date:{
        type: Date,
        default: Date.now,
        //required: true
    },
    updated_by:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 
    sublocality_level_1:{   //street name
        type: String,
    },
    locality: {         //area name - barsha etc. 
        type: String
    },
    administrative_area_level_1:{   //idkwtfthis is 
        type: String
    },
    country: {
        type: String,
        ref: "Country",
        required: true
    },
    delivers:{
        type: Boolean,
        default : false,
        
    },
    cuisines:[{
        type: Schema.Types.ObjectId,
        ref : "Cuisine"
    }]
});

const Restaurant = mongoose.model('restaurant', RestaurantSchema);
module.exports = Restaurant;