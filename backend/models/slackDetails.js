const mongoose = require('mongoose')


const slack_details = new mongoose.Schema({
   
     channel : {
        type : String,
        required : true
     },
     id : Number,
     webhook_url : {
        type : String,
        required : true
     },
     team_name : {
        type : String,
        unique : true,
        required : true
     },
     team_id : {
        type : String,
        unique : true,
     },
},{
timestamps : true
})

const slack_details_model =  mongoose.model("slack_details",slack_details)


module.exports = slack_details_model