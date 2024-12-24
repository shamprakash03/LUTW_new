const mongoose = require('mongoose')


const slack_like = new mongoose.Schema({
   
    highlight_id : {
        type : Number,
        required : true
     },
     slack_user_id : {
        type : String,
        required : true
     },
     id : Number,
     slack_id : {
        type : String,
        required : true
     },
},{
timestamps : true
})

const slack_like_model =  mongoose.model("slack_like",slack_like)


module.exports = slack_like_model