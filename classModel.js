const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
    capacity: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        
    },
    description: {
        type:String
      
    },
    duration:{
        type:String
    },
    price: {
        type:String
    },
    time: {
        type:String
    },
    type: {
        type:String
    }

});
const classModel = new mongoose.model('class', classSchema);
module.exports = classModel;