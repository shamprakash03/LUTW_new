const mongoose = require('mongoose')


const video_capture_details = new mongoose.Schema({
    video_url : {
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
     deleted : String,
     title : String,
     tags : String,
     date_created : String,
     date_modified : String,
    id : Number,
     vote_up : String,
     vote_down : String,
},{
timestamps : true
})

const video_capture_details_model =  mongoose.model("video_capture_details",video_capture_details)


module.exports = video_capture_details_model