const mongoose = require('mongoose')


const pdf_highlight_data = new mongoose.Schema({
    pdf_highlight_url_id : {
        type : String,
        required : true
     }, 
     date_created : String,
    id : Number,
     data : String
},{
timestamps : true
})

const pdf_highlight_data_model =  mongoose.model("pdf_highlight_data",pdf_highlight_data)


module.exports = pdf_highlight_data_model