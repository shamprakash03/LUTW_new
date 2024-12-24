const mongoose = require('mongoose')


const topic_bookmark_read_later = new mongoose.Schema({
    user_id : {
        type : String,
        required : true
     },
     bookmark_id : {
        type : String,
        required : true
     },
     deleted : String
},{
timestamps : true
})

const topic_bookmark_read_later_model =  mongoose.model("topic_bookmark_read_later",topic_bookmark_read_later)


module.exports = topic_bookmark_read_later_model