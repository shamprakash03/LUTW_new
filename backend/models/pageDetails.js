const mongoose = require('mongoose')


const page_details = new mongoose.Schema({
     url : {
        type : String,
        unique : true,
        required : true
     },
     date_created : String,
     id : Number,
     title : String,  
     vote_up : Number,
     vote_down : Number,
     logo : String,
     description : String,
     favourite : Number,
     deleted : Number,
     image_url : String,
    full_url : String,
},{
timestamps : true
})

const page_details_model =  mongoose.model("page_details",page_details)


module.exports = page_details_model