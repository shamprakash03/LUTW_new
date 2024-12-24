const mongoose = require('mongoose')


const bookmarkDetails = new mongoose.Schema({
    bookmark_data : String,
    date_created : String,
    id : Number,
    url_id : {
        type : String,
        required : true
     },
},{
timestamps : true
})

const bookmarkDetails_model =  mongoose.model("bookmark_details",bookmarkDetails)


module.exports = bookmarkDetails_model