const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderItems: [],
    phone: {
        type: String,
        required: true
    }
}, { timestamps: true })

const orderModel = mongoose.model('Order', orderSchema)

module.exports = orderModel