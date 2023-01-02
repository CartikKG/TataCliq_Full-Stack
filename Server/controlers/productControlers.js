const Post = require("../models/product.model");
const getAllPost = async (page, limit, sortBy, _order, searchBy, q) => {
  let limitt = Number(limit);

  let skip = Number(limit) * (Number(page) - 1);
  let total = await Post.find({
    [searchBy]: { $regex: new RegExp(q) },
  }).count();
  let Data_r = await Post.find({ [searchBy]: { $regex: new RegExp(q) } })
    .skip(skip)
    .limit(limitt)
    .sort({
      [sortBy]: _order == "desc" ? -1 : 1,
    });
  return { total, Data_r };
};


const getPostByID = (id) => {
  return Post.findById(id);
};
const deletePostByID = async (id, userId) => {
  let post = await Post.findById(id);

  if (!post) {
    return "Post does not exist";
  }

  if (String(post.userId._id) !== String(userId)) {
    return "User can't delete the post";
  }

  post = await Post.findByIdAndDelete(id);

  return post;
};
const patchPostByID = async (id, patch, userId) => {
  const user = await Post.findById(id);
  let post = await Post.findById(id);
  if (!post) {
    return "Post does not exist";
  }

  if (String(post.userId._id) !== String(userId)) {
    return "User can't edit the post";
  }

  return Post.findByIdAndUpdate(id, patch, { new: true });
};

const createNewPost = async (body, id) => {
  let ansa = await Post.create({
    title: body.title,
    img: body.img,
    description: body.description,
    brand: body.brand,
    price: body.price,
    strikedprice: body.strikedprice,
    product_type: body.product_type,
    department: body.department,
  });
  return ansa;
};
module.exports = {
  getAllPost,
  getPostByID,
  deletePostByID,
  patchPostByID,
  createNewPost,
};
