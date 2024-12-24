const mongoose = require('mongoose')


const slack_user_details = new mongoose.Schema({
     team_name : {
        type : String,
        required : true
     },
     email_id : {
        type : String,
        required : true
     },
     member_id : {
        type : String,
        required : true
     },
     id : Number,
     display_name : {
        type : String,
        required : true
     },
     no_og_highlights : Number,
     profile_url : {
        type : String,
        required : true
     },
},{
timestamps : true
})

const slack_user_details_model =  mongoose.model("slack_user_details",slack_user_details)


module.exports = slack_user_details_model