const mongoose = require('mongoose')


const folder = new mongoose.Schema({
    title : {
        type : String,
        required : true
     },
     id : Number,
     parent_id : Number
},{
timestamps : true
})

const folder_model =  mongoose.model("folder",folder)


module.exports = folder_model