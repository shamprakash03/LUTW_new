const mongoose = require('mongoose')


const highlight_details = new mongoose.Schema({
    data : String,
    url_id : {
        type : Number,
        required : true
    },
    user_id : Number,
    project_id : String,
     likes : Number,
     publish : Number,
     date_created : String,
    id : Number,
     save_mode : String,
     deleted : Number,
     highlights99 : String,
     high_position : Number,
     full_url : String,
},{
timestamps : true
})

const highlight_details_model =  mongoose.model("highlight_details",highlight_details)


module.exports = highlight_details_model