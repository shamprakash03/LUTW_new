const mongoose = require('mongoose')


const user_rating = new mongoose.Schema({
    
    user_id : {
        type : String,
        required : true
     },
     rated_user_id : {
        type : String,
        required : true
     },
     rating : {
        type : String,
        required : true
     },
     date_created : String,
     date_modified : String,
    id : Number,
     deleted : String,
},{
timestamps : true
})

const user_rating_model =  mongoose.model("user_rating",user_rating)


module.exports = user_rating_model