const mongoose = require('mongoose')


const google_fav = new mongoose.Schema({
    url : String,
    user_id : {
        type : String,
        required : true
    },
    project_id : Number,
    title : String,
    favicon : String,
    deleted : String,
    date_created : String,
    id : Number,
    favourite : String,
    isInterested : Number,
    source_url : String,
    type : String,
    image_url : String,
    tags : String,
    vote_up : String,
    vote_down : String,
    url_id : Number,
    isImported : Number,
    full_url : String,
},{
    timestamps : true
})


const google_favModel =  mongoose.model("google_fav",google_fav)
// console.log(google_favModel);


module.exports = google_favModel