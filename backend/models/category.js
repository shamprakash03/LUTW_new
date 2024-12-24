const mongoose = require('mongoose')


const category = new mongoose.Schema({
    category_name : {
        type : String,
        required : true
     },
     id : Number,
     deleted : String
},{
timestamps : true
})

const category_model =  mongoose.model("category",category)


module.exports = category_model