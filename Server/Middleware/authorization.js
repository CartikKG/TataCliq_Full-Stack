const config = require('../config/config');
const jwt=require('jsonwebtoken');
const authorization=(req,res,next)=>{
    let authorization= req.headers.authorization;
     if(authorization){
      let token= authorization.split(' ').pop();

      try {
        if(token){
           jwt.verify(token,config.JWT_SECRET_KEY);
           const user=jwt.decode(token);
           req.user=user;
           next();
      }
      } catch (error) {
           return  res.status(400).send({error:"Invaild Token Provided"})
           
      }
      
    }else{
        return res.status(400).send("No Token Provided")
    }
}
module.exports=authorization