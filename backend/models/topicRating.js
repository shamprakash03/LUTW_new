const mongoose = require('mongoose')


const topic_rating = new mongoose.Schema({
    user_id : {
        type : String,
        required : true
     },
    project_id : {
        type : String,
        required : true
     },
     rating : {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
     deleted : String
},{
timestamps : true
})

const topic_rating_model =  mongoose.model("topic_rating",topic_rating)


module.exports = topic_rating_model