const mongoose = require('mongoose')


const video_capture_image_details = new mongoose.Schema({
    image_url : {
        type : String,
        required : true
     },
     video_capture_id : {
        type : String,
        required : true
     },
     deleted : String,
     date_created : String,
    id : Number,
     video_id : String,
},{
timestamps : true
})

const video_capture_image_details_model =  mongoose.model("video_capture_image_details",video_capture_image_details)


module.exports = video_capture_image_details_model