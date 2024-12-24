const mongoose = require('mongoose')


const map = new mongoose.Schema({
    title : String,
    url : String,
    user_id : {
        type : String,
        required : true
    },
    date_created : String,
    date_modified : String,
    id : Number,
    deleted : Number,
     annotate_type : String,
     url_id : String,
     ip_address : String,
},{
timestamps : true
})

const map_model =  mongoose.model("map",map)


module.exports = map_model