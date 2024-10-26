const cartModel = require('../cartModel')

const getCart = async (req, res) => {
    let cart = await cartModel.find().populate({path:'class'});
    res.json({ cart });
}
const addClassToCart = async (req, res) => {
    try {
        const { id,email} = req.body;
     
        const newCart= new cartModel({
            class: id,
            email: email,
        });
        await newCart.save();

        return res.json({ mess: "add to cart successfully!!!" });
    } catch (error) {
        
        res.send(error);
    }
}

module.exports = { addClassToCart,getCart};