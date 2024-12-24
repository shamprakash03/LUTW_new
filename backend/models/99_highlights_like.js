const mongoose = require('mongoose')


const highlight_like = new mongoose.Schema({
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
     liked : String
},{
timestamps : true
})

const highlight_like_model =  mongoose.model("99_highlights_like",highlight_like)


module.exports = highlight_like_model