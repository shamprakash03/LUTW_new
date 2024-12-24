const mongoose = require('mongoose')


const topic_fav_like = new mongoose.Schema({
    topic_id : {
        type : String,
        required : true
     },
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
     deleted : String
},{
timestamps : true
})

const topic_fav_like_model =  mongoose.model("topic_fav_like",topic_fav_like)


module.exports = topic_fav_like_model