const express = require("express");
const Wishlist = require("../models/wishlistModel.js");
const Item = require("../models/product.model");
const Auth = require("../Middleware/authorization");

const router = new express.Router();


router.get("/", async (req, res) => {
 try {
    const cart = await Wishlist.find();
    res.status(200).send({wishlist:cart});
   
  } catch (error) {
    res.status(500).send({error:"Not Found"});
  }
});
router.get("/:id", async (req, res) => {
  const owner = req.params.id;

  try {
    const cart = await Wishlist.findOne({owner}).populate("items.itemId");
       res.status(200).send({wishlist:cart});

  } catch (err) {
    res.status(500).send({error:"Something went wrong"});
  }
});


router.post("/:id", async (req, res) => {
    const owner = req.params.id;
    let { itemId, quantity } = req.body;
  
  try {
    let cart = await Wishlist.findOne({owner}).populate("items.itemId");
    let item = await Item.findOne({ _id: itemId });
    let price=item.price;
   
     if (!item) {
     return res.status(404).send({ error: "item not found" });
    }

   if (cart) {
     let ind=-1;
     for (let index = 0; index <cart.items.length; index++) {
       if(cart.items[index].itemId._id==itemId){
         ind = index;
         }
        
      } 
      if(ind==-1){
        cart.items.push({itemId,quantity});
        let bill=0;
        for (let index = 0; index <cart.items.length-1; index++) {
           bill+=cart.items[index].quantity*cart.items[index].itemId.price
        } 
        bill+=price*quantity;
        cart.bill=Number(bill);
        cart.save();
         return res.send({
            wishlist:cart
         })
      }else{
        cart.items[ind].quantity=quantity;
        let bill=0;
        cart.items.forEach(element => {
          bill+=Number( element.quantity)* Number(element.itemId.price);
        });
        cart.bill=Number(bill);
        cart.save();
         return res.send({
            wishlist:cart
         })

      }
    } else {
    
       const newCart = await Wishlist.create({
        owner,
        items: [{ itemId,quantity }],
        bill: Number( quantity) * Number( price),
      });
      return res.status(201).send({wishlist:newCart});
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({error:"something went wrong"});
  }
});
router.delete("/:id", async (req, res) => {
  const owner = req.params.id;

  const itemId = req.body.itemId;
  try {
    let cart = await Wishlist.findOne({ owner }).populate("items.itemId");

    const itemIndex = cart.items.findIndex((item) => item.itemId._id == itemId);
    
    if (itemIndex > -1) {
      let item = cart.items[itemIndex];
      cart.bill -= item.quantity * item.itemId.price;
      if(Number( cart.bill) < 0) {
        Number( cart.bill)  = 0
      } 
      cart.items.splice(itemIndex, 1);
      cart.bill = cart.items.reduce((acc, curr) => {
        return acc + curr.quantity * curr.itemId.price;
    },0)
      cart = await cart.save();

      res.status(200).send({wishlist:cart});
    } else {
    res.status(404).send({error:"item not found"});
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({error:error});
  }
});


router.delete("/blank/:id", async (req, res) => {
  const owner = req.params.id;
 try {
    let cart = await Wishlist.findOne({ owner }).populate("items.itemId");
    cart.bill = 0;
    cart.items=[];
    cart = await cart.save();
    res.status(200).send({wishlist:cart});
 } catch (error) {
     res.status(400).send({error:error});
  }
});



module.exports = router;
