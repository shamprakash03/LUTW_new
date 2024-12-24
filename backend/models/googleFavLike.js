const mongoose = require('mongoose')


const google_fav_like = new mongoose.Schema({
    google_fav_id : {
        type : String,
        required : true
     },
     user_id: {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
     voted: {
        type : String,
        required : true
     },
},{
timestamps : true
})

const google_fav_like_model =  mongoose.model("google_fav_like",google_fav_like)


module.exports = google_fav_like_model