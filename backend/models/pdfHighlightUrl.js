const mongoose = require('mongoose')


const pdf_highlight_url = new mongoose.Schema({
    url : {
        type : String,
        required : true
     },
     emailId : {
        type : String,
        required : true
     },
     project_id : {
        type : Number,
        required : true
     },
     date_created : String,
    id : Number,
     deleted : String
},{
timestamps : true
})

const pdf_highlight_url_model =  mongoose.model("pdf_highlight_url",pdf_highlight_url)


module.exports = pdf_highlight_url_model