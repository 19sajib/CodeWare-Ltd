const mongoose = require('mongoose')

const orderItemsSchema = new mongoose.Schema({
    products: [
        {product: {
            type: String
        },
        quantity: {
            type: Number,
            default: 1
        }}
    ],
}, { timestamps: true })

const orderItemsModel = mongoose.model('OrderItems', orderItemsSchema)

module.exports = orderItemsModel