const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const wishlistSchema = new mongoose.Schema({
    owner : {
        type: ObjectID,
        required: true,
        ref: 'users'
    },
    items: [{
        itemId: {
            type: ObjectID,
            ref: 'products',
            require:true
        },
        quantity:Number
       
    }],
    bill: {
        type: Number,

    }
}, {
    timestamps: true
})

const Wishlist = mongoose.model('Wishlists', wishlistSchema)
module.exports = Wishlist