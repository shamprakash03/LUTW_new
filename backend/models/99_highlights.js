const mongoose = require('mongoose')


const highlight_delete = new mongoose.Schema({
   
    page_id : {
        type : String,
        required : true
     },
     user_id : {
        type : String,
        required : true
     },
     date_created : String,
     id : Number,
     deleted : String
},{
timestamps : true
})

const highlight_delete_model =  mongoose.model("99_highlights",highlight_delete)


module.exports = highlight_delete_model