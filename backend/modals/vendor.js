const mongoose = require('mongoose');
const VendorSchema = new mongoose.Schema({
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
    },
    firm:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Firm'
        }
    ]

});
const Vendor = mongooes.model('Vendor',VendorSchema);
module.exports=Vendor;