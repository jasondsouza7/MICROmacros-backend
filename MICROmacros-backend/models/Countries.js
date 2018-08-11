const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountriesSchema = new Schema({
    country_name:{
        type: String,
        required: true
    }
});

 const Country = mongoose.model('country', CountriesSchema);
 module.exports = Country;