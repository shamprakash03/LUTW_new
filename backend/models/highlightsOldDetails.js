const mongoose = require('mongoose')


const highlight_old_details = new mongoose.Schema({
    data : String,
    url_id : {
        type : Number,
        required : true
    },
    user_id : Number,
    project_id : String,
     likes : Number,
     date_created : String,
    id : Number,
     publish : Number,
     save_mode : String,
     deleted : Number,
},{
timestamps : true
})

const highlight_old_details_model =  mongoose.model("highlight_old_details",highlight_old_details)


module.exports = highlight_old_details_model