const mongoose = require('mongoose')


const pre_register_user = new mongoose.Schema({
   
     emailId : {
        type : String,
        required : true
     },
     type_use : {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
     deleted : String
},{
timestamps : true
})

const pre_register_user_model =  mongoose.model("pre_registered_user",pre_register_user)


module.exports = pre_register_user_model