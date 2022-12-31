const mongoose=require('mongoose');
const productSchema=new mongoose.Schema(
    {
        
        title:{
            type:String,
            require:true
        },
        img:{
            type:String,
            require:true
        },
        description:{
            type:String,
        },
        brand:{
              type:String,
        },
        price:{
             type:Number,
        },
        strikedprice:{
              type:Number,
        },
        product_type:{
            type:String,
        },
        department:{
            type:String,
        }
    },{
        versionKey:false,
        timestamps:true
    }
)
const Product = mongoose.model('products',productSchema);
module.exports=Product;