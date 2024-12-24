const mongoose = require('mongoose')


const highlight_page_link = new mongoose.Schema({
     url : {
        type : String,
        unique : true,
        required : true
     },
     title : {
        type : String,
        required : true
     },
     votes : Number,
     image_url : String,
     tags : String,
     short_url : String,
     added_link : String,
     deleted : Number,
     user_id : {
        type : Number,
        required : true
     },
     date_created : String,
     id : Number,
     public : Number,
     category : String
},{
timestamps : true
})

const highlight_page_link_model =  mongoose.model("99_highlights_page_link",highlight_page_link)


module.exports = highlight_page_link_model