const mongoose = require('mongoose')


const gmail_details = new mongoose.Schema({
    gmail : {
        type : String,
        required : true
     }
},{
timestamps : true
})

const gmail_details_model =  mongoose.model("gmail_details",gmail_details)


module.exports = gmail_details_model