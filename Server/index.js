const express=require("express");
const connect=require("./db/db")
const usersControler=require('./all_Routes/usersRoutes')
const productControler=require('./all_Routes/productRoutes')
const cartRoutes=require('./all_Routes/cartRoutes')
const config=require('./config/config')
const cors=require('cors')
const app=express();
app.use(express.json())
app.use(cors())
app.use('/users',usersControler)
app.use('/products',productControler)
app.use('/cart',cartRoutes)
app.listen(config.PORT,async(req,res)=>{
    try {
        await connect();
        console.log(`Server Listening on port ${config.PORT}`);
    } catch (error) {
        console.log(error)
    }
})
