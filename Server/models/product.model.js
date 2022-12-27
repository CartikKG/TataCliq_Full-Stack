const mongoose=require('mongoose');
// "id": "1",
// "department": "footwear",
// "category": "men",
// "img": "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013762626_437Wx649H_202212040916001.jpeg",
// "brand": "Woodland",
// "name": "Woodland Men's Rust Derby Shoes",
// "strikedprice": "1647",
// "price": "1497",
// "product_type": "casual"
// },
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
              username:String,
        },
        price:{
             useremail:Number,
        },
        strikedprice:{
              useremail:Number,
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