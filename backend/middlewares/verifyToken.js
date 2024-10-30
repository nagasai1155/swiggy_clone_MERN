const Vendor = require('../modals/vendor')
const jwt = require('jsonwebtoken');

const verifyToken = async(req,res,next)=>{
     const token = req.headers.token;

     if(!token){
        return res.status(402).json({message:"token is required"});
     }
     try{
      
        



     }catch(error){

     }
}