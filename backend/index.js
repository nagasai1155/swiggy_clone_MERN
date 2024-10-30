const express = require("express")
const dotenv = require('dotenv');
const mongooes = require("mongoose");
const vendorRoutes=require('./routers/vendorRoutes');
const app = express();
const bodyParser = require('body-parser');
const port = 3900;
dotenv.config();

mongooes.connect(process.env.MONGO_URI)
.then(()=>{console.log(" mongodb successfully connected");})
.catch(()=>console.log("not connected"))
  
app.use(bodyParser.json());
app.use('/vendor',vendorRoutes);

app.listen(port,()=>{
    console.log(`server started and running at ${port}`)
})

app.get('/home',(req,res)=>{
res.send("<h1>welcome to suby");
})