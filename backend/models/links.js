const mongoose = require('mongoose')


const links = new mongoose.Schema({
     url : String,
     id : Number
},{
timestamps : true
})

const links_model =  mongoose.model("links",links)


module.exports = links_model