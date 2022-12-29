const express = require("express");
const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const Auth = require('../middleware/authorization');
const router = express.Router();
//get 
router.post("/:id", async (req, res) => {
    const owner = req.params.id;
    try {
        const cart = await Cart.findOne({owner});
    if (cart && cart.Products.length > 0) {
         res.status(200).send(cart);
    } else {
          res.send('user Not found');
    }
    } catch (error) {
        res.status(500).send();
    }
    });




    router.post("/:id", Auth, async (req, res) => {
        const owner = req.params.id;
        const { ProductId, quantity } = req.body;
        try {
            const cart = await Cart.findOne({ owner });
            const Product = await Product.findOne({ _id: ProductId });
        if (!Product) {
            res.status(404).send({ message: "Product not found" });
            return;
        }
            const price = Product.price;
            const name = Product.title;
        //If cart already exists for user,
        if (cart) {
            const ProductIndex = cart.Products.findIndex((Product) => Product.ProductId ==  ProductId);
        //check if product exists or not
        if (ProductIndex > -1) {
            let product = cart.Products[ProductIndex];
            product.quantity += quantity;
            cart.bill = cart.Products.reduce((acc, curr) => {
               return acc + curr.quantity * curr.price;
           },0)
        cart.Products[ProductIndex] = product;
           await cart.save();
           res.status(200).send(cart);
        } else {
           cart.Products.push({ ProductId, name, quantity, price });
           cart.bill = cart.Products.reduce((acc, curr) => {
           return acc + curr.quantity * curr.price;
        },0)
           await cart.save();
           res.status(200).send(cart);
        }
        } else {
        //no cart exists, create one
        const newCart = await Cart.create({
           owner,
           Products: [{ ProductId, title, quantity, price }],
            bill: quantity * price,
        });
        return res.status(201).send(newCart);
        }
        } catch (error) {
           console.log(error);
           res.status(500).send("something went wrong");
        }
        });


        router.delete("/", Auth, async (req, res) => {
            const owner = req.user._id;
            const ProductId = req.query.ProductId;
            try {
               let cart = await Cart.findOne({ owner });
               const ProductIndex = cart.Products.findIndex((Product) => Product.ProductId == ProductId);
            if (ProductIndex > -1) {
                 let Product = cart.Products[ProductIndex];
                 cart.bill -= Product.quantity * Product.price;
            if(cart.bill < 0) {
                  cart.bill = 0
            }
                 cart.Products.splice(ProductIndex, 1);
                 cart.bill = cart.Products.reduce((acc, curr) => {
            return acc + curr.quantity * curr.price;
            },0)
                cart = await cart.save();
                res.status(200).send(cart);
            } else {
                res.status(404).send("Product not found");
            }
            } catch (error) {
               console.log(error);
               res.status(400).send();
            }
            });

module.exports=router