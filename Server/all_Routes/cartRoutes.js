const express = require("express");
const Cart = require("../models/cart.model");
const Item = require("../models/product.model");
const Auth = require("../Middleware/authorization");

const router = new express.Router();


router.get("/", async (req, res) => {
  // const owner = req.params.id;

  try {
    const cart = await Cart.findOne();
    res.status(200).send({cart:cart});
   
  } catch (error) {
    res.status(500).send({error:"Not Found"});
  }
});
router.get("/:id", async (req, res) => {
  const owner = req.params.id;

  try {
    const cart = await Cart.findOne({owner}).populate("items.itemId");
    // console.log(cart,"fet")
    // if (cart && cart.items.length > 0) {
      res.status(200).send({cart});
    // } else {
    //   res.send(null);
    // }
  } catch (err) {
    res.status(500).send({error:"Something went wrong"});
  }
});


router.post("/:id", async (req, res) => {
    const owner = req.params.id;
    let { itemId, quantity } = req.body;
    // console.log(quantity)

  try {
    let cart = await Cart.findOne({owner}).populate("items.itemId");
    let item = await Item.findOne({ _id: itemId });
    let price=item.price;
    // let quantity=item
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
            cart:cart
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
            cart:cart
         })

      }
      
   
      

    
    } else {
    
       const newCart = await Cart.create({
        owner,
        items: [{ itemId,quantity }],
        bill: Number( quantity) * Number( price),
      });
      return res.status(201).send({newCart});
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
    let cart = await Cart.findOne({ owner }).populate("items.itemId");;

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

      res.status(200).send({cart});
    } else {
    res.status(404).send({error:"item not found"});
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({error:error});
  }
});



module.exports = router;
