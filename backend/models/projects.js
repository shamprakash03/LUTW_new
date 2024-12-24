const mongoose = require('mongoose')


const projects = new mongoose.Schema({
   
     user_id : {
        type : Number,
        required : true
     },
     project_title : {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
     deleted : Number
},{
timestamps : true
})

const projects_model =  mongoose.model("projects",projects)


module.exports = projects_model