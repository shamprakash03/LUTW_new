const mongoose = require('mongoose')


const folder_system = new mongoose.Schema({
    name : String,
     parent_id : String,
     id: Number
},{
timestamps : true
})

const folder_system_model =  mongoose.model("folder_system",folder_system)


module.exports = folder_system_model