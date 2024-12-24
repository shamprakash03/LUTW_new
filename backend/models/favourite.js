const mongoose = require('mongoose')


const favourite = new mongoose.Schema({
    pageid : {
        type : String,
        required : true
     },
     userid : {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
     favourite : String
},{
timestamps : true
})

const favourite_model =  mongoose.model("favourite",favourite)


module.exports = favourite_model