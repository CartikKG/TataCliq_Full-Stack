const express=require('express');
const authorization = require('../Middleware/authorization');
const Post= require('../controlers/productControlers')
const route=express.Router();
// const axios=require('axios')
route.get('/', async (req,res)=>{
   
    try {
        const data=await Post.getAllPost();
        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
});
route.post('/',authorization, async (req,res)=>{
   let body=req.body;
   let userId=req.user._id;
    try {
        const data=await Post.createNewPost(body,userId);
        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
});
route.delete('/:id',authorization, async (req,res)=>{
     let id=req.params.id;
     let userId=req.user._id;
    try {
        const data=await Post.deletePostByID(id,userId);
        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
});
route.patch('/:id',authorization, async (req,res)=>{
     let id=req.params.id;
     let dataa=req.body;
     let userId=req.user._id;
    try {
        const data=await Post.patchPostByID(id,dataa,userId);
        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
});
route.get('/:id', async (req,res)=>{
     let id=req.params.id;
    try {
        const data=await Post.getPostByID(id);
        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
});

module.exports=route;