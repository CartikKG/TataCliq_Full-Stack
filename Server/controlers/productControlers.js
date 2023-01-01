const Post=require('../models/product.model');

//     {
//       "id": "110",
//       "department": "Home",
//       "category": "Bed Linen",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000007396151_437Wx649H_202109212027431.jpeg",
//       "brand": "Saral Home",
//       "name": "Saral Home Majesty Grey 350 TC Bed",
//       "strikedprice": "1786",
//       "price": "1624",
//       "product_type": "Bed Linen"
//     },
//     {
//       "id": "111",
//       "department": "Home",
//       "category": "Bath Linen",
//       "img": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009883874_437Wx649H_202107010046471.jpeg",
//       "brand": "Fabindia",
//       "name": "Fabindia Orchid White & Gold Cotton",
//       "strikedprice": "1023",
//       "price": "930",
//       "product_type": "Towels"

const getAllPost=async (page,limit,sortBy, _order,searchBy,q)=>{
    let limitt=Number(limit);
    // console.log(limit)
    // .find({
    //     [searchBy]:{
    //         $regex:new RegExp(q)
    //     }
    // })
    let skip=Number(limit)*(Number(page)-1);
    let total=await Post.find({ [searchBy]:{$regex:new RegExp(q)}}).count();
    let Data_r=await Post.find({ [searchBy]:{$regex:new RegExp(q)}}).skip(skip).limit(limitt).sort({
        [sortBy]:_order=='desc'?-1:1
    });
    return {total,Data_r};
}
const getPostByID=(id)=>{
    return Post.findById(id)
}
const deletePostByID= async(id,userId)=>{

let post = await Post.findById(id)

if (!post) {
    return ('Post does not exist');
}

if (String(post.userId._id) !== String(userId)) {
    return ('User can\'t delete the post')
}

post = await Post.findByIdAndDelete(id)

return post;
}
const patchPostByID=async(id, patch, userId)=>{
    const user = await Post.findById(id)
    let post = await Post.findById(id)
    if (!post) {
        return ('Post does not exist');
    }

    if (String(post.userId._id) !== String(userId)) {
        return ('User can\'t edit the post')
    }

  
    return Post.findByIdAndUpdate(id,patch,{new:true})

}

const createNewPost=async(body,id)=>{
    let ansa= await Post.create({
    title:body.title,
    img:body.img,
    description:body.description,
    brand:body.brand,
    price:body.price,
    strikedprice:body.strikedprice,
    product_type:body.product_type,
    department:body.department,
   })
   return ansa;
}
module.exports={
    getAllPost,
    getPostByID,
    deletePostByID,
    patchPostByID,
    createNewPost
}