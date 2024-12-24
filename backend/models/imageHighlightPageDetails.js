const mongoose = require('mongoose')


const image_highlights_page_details = new mongoose.Schema({
     page_url : {
        type : String,
        required : true
     },
     user_id : {
        type : String,
        required : true
     },
     project_id : {
        type : String,
        required : true
     },
     title : String,
     deleted : String,
     date_created : String,
     date_modified : String,
    id : Number,
     tags : String,
     vote_up : String,
     vote_down : String,
     image_highlights_page_detailsCol : String
},{
timestamps : true
})

const image_highlights_page_details_model =  mongoose.model("image_highlight_page_details",image_highlights_page_details)


module.exports = image_highlights_page_details_model