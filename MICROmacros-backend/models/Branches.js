const BranchesSchema = new Schema({
    latitude:{
        type: String,
        //required: true
    },
    longitude:{
        type: String,
        //required: true
    }     
});

module.exports= Branches = mongoose.model('branches', BranchesSchema);