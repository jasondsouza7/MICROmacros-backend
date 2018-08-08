const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountriesSchema = new Schema({
    country_name:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('countries', CountriesSchema);