const mongoose = require('mongoose')


const sticky_notes = new mongoose.Schema({
   
     notes : {
        type : String,
        required : true
     },
     user_id : {
        type : String,
        required : true
     },
     project_id : {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
     deleted : String,
},{
timestamps : true
})

const sticky_notes_model =  mongoose.model("sticky_notes",sticky_notes)


module.exports = sticky_notes_model