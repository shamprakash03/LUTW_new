const mongoose = require('mongoose')


const user_favourite_topic = new mongoose.Schema({
    project_name : {
        type : String,
        required : true
     },
     project_id : {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
    user_id : {
        type : String,
        required : true
     },
     deleted : String
   
},{
timestamps : true
})

const user_favourite_topic_model =  mongoose.model("user_favourite_topic",user_favourite_topic)


module.exports = user_favourite_topic_model