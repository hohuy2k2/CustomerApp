const express = require('express');
const { getClass,addClass,findClass} = require('../controller/classController')
const  { addClassToCart,getCart} = require('../controller/cartController')
const router = express.Router();
router.post('/add/class',addClass);
router.post('/get/class',getClass);
router.post('/add/cart',addClassToCart);
router.post('/get/cart',getCart);
router.post('/find/class',findClass);

module.exports = router;