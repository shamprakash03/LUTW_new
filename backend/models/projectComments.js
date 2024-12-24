const mongoose = require('mongoose')


const project_comments = new mongoose.Schema({
    project_id : {
        type : Number,
        required : true
     },
     user_id : {
        type : Number,
        required : true
     },
     date_created : String,
    id : Number,
     comments : String
},{
timestamps : true
})

const project_comments_model =  mongoose.model("project_comments",project_comments)


module.exports = project_comments_model