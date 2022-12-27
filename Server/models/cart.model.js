const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema(
    {
        
        cart:[{type:mongoose.Schema.Types.ObjectId,ref:"products"}]
    },{
        versionKey:false,
        timestamps:true
    }
)
const Cart= mongoose.model('carts',cartSchema);
module.exports=Cart;