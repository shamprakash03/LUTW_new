const mongoose = require('mongoose')


const google_interest_project = new mongoose.Schema({
    project_name : String,
    user_id : String,
     deleted : Number,
     project_description : String,
     category_id : String,
     public : String,
     image_url : String,
     rating : String,
     parent_id : Number,
     date_created : String,
    id : Number,
     vote_up : String,
     vote_down : String,
     publish : String,
     topic_level : String,
},{
timestamps : true
})

const google_interest_project_model =  mongoose.model("google_interest_project",google_interest_project)


module.exports = google_interest_project_model