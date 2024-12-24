const mongoose = require('mongoose')


const page_votes = new mongoose.Schema({
    page_id : {
        type : Number,
        required : true
     },
     user_id : {
        type : Number,
        required : true
     },
     voted : String
},{
timestamps : true
})

const page_votes_model =  mongoose.model("page_votes",page_votes)


module.exports = page_votes_model