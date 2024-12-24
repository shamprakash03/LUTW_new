const mongoose = require('mongoose')


const interest_comments = new mongoose.Schema({
    project_id : {
        type : Number,
        required : true
     },
     user_id : {
        type : Number,
        required : true
     },
     url_id : {
        type : Number,
        required : true
     },
     date_created : String,
    id : Number,
     comments : String,
},{
timestamps : true
})

const interest_comments_model =  mongoose.model("interest_comments",interest_comments)


module.exports = interest_comments_model