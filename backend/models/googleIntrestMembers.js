const mongoose = require('mongoose')


const google_interest_members = new mongoose.Schema({
     project_id : {
        type : Number,
        required : true
     },
     member_email_id : {
        type : String,
        required : true
     },
     member_user_id :Number, 
     date_created : String,
    id : Number,
     deleted : Number
},{
timestamps : true
})

const google_interest_members_model =  mongoose.model("google_interest_members_details",google_interest_members)


module.exports = google_interest_members_model;