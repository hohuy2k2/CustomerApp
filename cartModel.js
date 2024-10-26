const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class',
    },

});
const cartModel = new mongoose.model('cart', cartSchema);
module.exports = cartModel;