const mongoose = require('mongoose')


const alter_page_votes = new mongoose.Schema({
    user_id :  String,
    alter_id : String,
    voted : String,
    id : Number
},{
timestamps : true
})

const alter_page_votes_model =  mongoose.model("alter_page_votes",alter_page_votes)


module.exports = alter_page_votes_model