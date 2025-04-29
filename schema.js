const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{type:String, required:true, trim:true},
    price:{type:Number, required:true},
    genre:{type:String, required:true}
});

const model = mongoose.model("models",schema);

module.exports = {model};