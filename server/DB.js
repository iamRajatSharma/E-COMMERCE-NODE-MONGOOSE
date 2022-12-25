const mongoose = require("mongoose")
require('dotenv').config();
const url = process.env.DB_URL
mongoose.connect(url, (err)=>{
    if(err){
        console.log(`Database Error : ${err.name}`)
    }
    else{
        console.log("Database Connected....")
    }
})