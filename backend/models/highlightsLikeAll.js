const mongoose = require('mongoose')


const highlight_like_all = new mongoose.Schema({
    page_id : {
        type : Number,
        required : true
     },
     user_id : {
        type : Number,
        required : true
     },
     liked : Number,
     highlight_id : String,
},{
timestamps : true
})

const highlight_like_all_model =  mongoose.model("highlight_likes",highlight_like_all)


module.exports = highlight_like_all_model