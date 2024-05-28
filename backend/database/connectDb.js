const mongoose=require('mongoose')

const connectDb=()=>mongoose.connect(process.env.mongodb_cloudurl).then(()=>{
    console.log("Database connected sucessfully");
  })
module.exports=connectDb;