const mongoose = require('mongoose')


const image_highlights_details = new mongoose.Schema({
    image_url : {
        type : String,
        required : true
     },
     image_highlight_id : {
        type : String,
        required : true
     },
     image_highlight_page_id : String,
     date_created : String,
    id : Number,
     deleted : String,
},{
timestamps : true
})

const image_highlights_details_model =  mongoose.model("image_highlight_details",image_highlights_details)


module.exports = image_highlights_details_model