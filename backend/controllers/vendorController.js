const Vendor = require('../modals/vendor');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();
const secretKey = process.env.whatisyourname;





const vendorRegister = async(req,res)=>{
       const {username,email,password} = req.body; 
       try{
          const vendorEmail = await Vendor.findOne({email});
          if(vendorEmail){
            return res.status(400).json("email already taken");


          }
          const hashedpassword = await bcrypt.hash(password,10);
          const newVendor = new Vendor({
            username,email,password:hashedpassword
          });
          await newVendor.save();
          res.status(201).json({message:"vendor register successfully"})
          console.log("registerd");

       }catch(err){
        console.log(err);
         res.status(503).json({err:"internal server error"});
       }
}

//now it's time to create vendor login
const vendorLogin= async(req,res)=>{
    const{email,password} = req.body;
    try{
     const vendor = await Vendor.findOne({email});
     if(!vendor || !(await bcrypt.compare(password,vendor.password))){
      res.status(403).json({message:"incorrect password or email"})
         
     }

     const token = jwt.sign({vendorId:vendor._id},secretKey,{expiresIn:"1h"})

     res.status(203).json({message:"successfully login",token});
     console.log(email,"this is token",token);
    }catch(error){
      console.log(error);
      res.status(500).json({message:"server error "})
      
    }
}


module.exports={vendorRegister,vendorLogin}