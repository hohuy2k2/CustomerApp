const classModel = require('../classModel')

const getClass = async (req, res) => {
    let _class = await classModel.find();
    res.json({ _class });
}
const addClass = async (req, res) => {
    try {
        const { capacity, date, description, duration, price, time ,type} = req.body;
        
        const newClass = new classModel({
            capacity: capacity,
            date: date,
            description: description,
            duration: duration,
            price: price,
            time:time,
            type:type,
        
        });
        await newClass.save();

        return res.json({ mess: "add class successfully!!!" });
    } catch (error) {
        res.send(error);
    }
}
const findClass = async (req, res) => {
    try {
        let _class = await classModel.find({ date: { $regex: req.body.date, $options: 'i' } });
        if(_class.length !==0)
        { 
            res.send(_class);
        }
        else{
          
       res.send(_class);
        }
     } catch (error) {
        
       
     }
}

module.exports = { addClass,getClass,findClass};