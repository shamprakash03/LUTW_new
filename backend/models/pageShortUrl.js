const mongoose = require('mongoose')


const page_short_url = new mongoose.Schema({
    full_url : {
        type : String,
        unique : true,
        required : true
     },
     short_url : {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
     title : String,
},{
timestamps : true
})

const page_short_url_model =  mongoose.model("page_short_url",page_short_url)


module.exports = page_short_url_model