const mongoose = require('mongoose')


const bookmarkLink = new mongoose.Schema({
    bookmark_title : String,
    bookmark_url : {
        type : String,
        required : true
     },
     date_created : String,
     id : Number,
     user_id : {
        type : String,
        required : true
     },
    bookmarked : Number,
    bookmark_description : String,
    deleted : Number,
    favourite : Number,
    bookmark_image : String,
    tags : String,
   
},{
    timestamps : true
})


const bookmarkLinkModel =  mongoose.model("bookmark_link",bookmarkLink)


module.exports = bookmarkLinkModel