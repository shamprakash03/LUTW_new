const mongoose = require('mongoose')


const page_comments = new mongoose.Schema({
    page_id_99 : {
        type : Number,
        required : true
     },
     id : Number,
     comments : {
        type : String,
        required : true
     },
},{
timestamps : true
})

const page_comments_model =  mongoose.model("page_comments",page_comments)


module.exports = page_comments_model