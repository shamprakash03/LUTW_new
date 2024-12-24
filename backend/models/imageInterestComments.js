const mongoose = require('mongoose')


const image_interest_comments = new mongoose.Schema({
    project_id : {
        type : Number,
        required : true
     },
     user_id : {
        type : Number,
        required : true
     },
     image_id : {
        type : Number,
        required : true
     },
     comments : String,
     date_created : String,
    id : Number,
     image_type : String,
},{
timestamps : true
})

const image_interest_comments_model =  mongoose.model("image_interest_comments",image_interest_comments)


module.exports = image_interest_comments_model