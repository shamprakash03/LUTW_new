const mongoose = require('mongoose')


const feedback = new mongoose.Schema({
    emailid : {
        type : String,
        required : true
     },
     id: Number,
     rate : String,
     name : String,
     comments : String
},{
timestamps : true
})

const feedback_model =  mongoose.model("feedback",feedback)


module.exports = feedback_model