const mongoose = require('mongoose')


const ads_link = new mongoose.Schema({
    target_url : {
        type : String,
        required : true
     },
     product_url : {
        type : String,
        required : true
     },
     id: Number,
     description : String
},{
timestamps : true
})

const ads_link_model =  mongoose.model("ads_link",ads_link)


module.exports = ads_link_model