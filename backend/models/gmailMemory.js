const mongoose = require('mongoose')


const gmail_memory = new mongoose.Schema({
    messageid : {
        type : String,
        required : true
     },
     email: {
        type : String,
        required : true
     },
     messageMode: {
        type : String,
        required : true
     },
     id : Number
},{
timestamps : true
})

const gmail_memory_model =  mongoose.model("test",gmail_memory)


module.exports = gmail_memory_model