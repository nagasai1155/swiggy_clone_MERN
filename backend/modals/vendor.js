const mongooes = require('mongoose');
const VendorSchema = new mongooes.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

});
const Vendor = mongooes.model('Vendor',VendorSchema);
module.exports=Vendor;