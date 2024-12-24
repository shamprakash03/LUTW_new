const mongoose = require('mongoose')


const interest_favourite = new mongoose.Schema({
    project_id : {
        type : Number,
        required : true
     },
     user_id : {
        type : Number,
        required : true
     },
     url_id : {
        type : Number,
        required : true
     },
     isFav : Number,
     date_created : String,
    id : Number,
},{
timestamps : true
})

const interest_favourite_model =  mongoose.model("interest_favourite",interest_favourite)


module.exports = interest_favourite_model