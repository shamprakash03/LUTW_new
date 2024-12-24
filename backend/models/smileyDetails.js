const mongoose = require('mongoose')


const smiley_details = new mongoose.Schema({
   
     url : {
        type : String,
        required : true
     },
     smiley_image_url : {
        type : String,
        required : true
     },
     user_id : {
        type : String,
        required : true
     },
     deleted : String,
     date_created : String,
     date_modified : String,
    id : Number,
     title : String
},{
timestamps : true
})

const smiley_details_model =  mongoose.model("smiley_details",smiley_details)


module.exports = smiley_details_model