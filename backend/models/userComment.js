const mongoose = require('mongoose')


const user_comment = new mongoose.Schema({
    comment : String,
    user_id : {
        type : String,
        required : true
     },
     user_name : {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
     highlight_id : {
        type : String,
        required : true
     },
},{
timestamps : true
})

const user_comment_model =  mongoose.model("user_comment",user_comment)


module.exports = user_comment_model