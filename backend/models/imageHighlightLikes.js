const mongoose = require('mongoose')


const image_highlights_likes = new mongoose.Schema({
    image_url_id : String,
    user_id : {
        type : String,
        required : true
     },
     voted : {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
     image_type : {
        type : String,
        required : true
     },
     video_url_id : String,
},{
timestamps : true
})

const image_highlights_likes_model =  mongoose.model("image_highlight_likes",image_highlights_likes)


module.exports = image_highlights_likes_model