const express=require("express");
const connect=require("./db/db")

const config=require('./config/config')
const app=express();


app.listen(config.PORT,async(req,res)=>{
    
    try {
        await connect();
        console.log(`Server Listening on port ${config.PORT}`);
    } catch (error) {
        console.log(error)
    }
})
