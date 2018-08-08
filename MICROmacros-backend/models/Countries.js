const CountriesSchema = new Schema({
    country_name:{
        type: String,
        required: true
    }
});

module.exports= Countries = mongoose.model('countries', CountriesSchema);