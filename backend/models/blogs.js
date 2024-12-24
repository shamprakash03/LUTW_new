const mongoose = require('mongoose')


const blogs = new mongoose.Schema({
    blog_title : {
        type : String,
        required : true
     },
     blog_url : {
        type : String,
        required : true
     },
     blog_imgUrl : {
        type : String,
        required : true
     },
     id : Number,
     blog_domain : {
        type : String,
        required : true
     },
     
},{
timestamps : true
})

const blogs_model =  mongoose.model("",blogs)


module.exports = blogs_model