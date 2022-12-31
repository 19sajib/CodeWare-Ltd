const router = require('express').Router();
const OrderModel = require('../Model/Order')
const OrderItemsModel = require('../Model/OrderItems')

router.post('/', async (req, res)=> {
    console.log(req.body)
    try {
        const orderItems = new OrderItemsModel({products: req.body.orderItems})
        orderItems.save()
        const order = new OrderModel({phone: req.body.phone, orderItems: orderItems._id})        
        order.save()
        
        res.status(201).json({order, message: 'Order Created Sucessfully!'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router