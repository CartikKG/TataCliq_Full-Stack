const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema({
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

const Cart = mongoose.model('Carts', cartSchema)

module.exports = Cart