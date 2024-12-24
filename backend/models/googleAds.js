const mongoose = require('mongoose')


const google_ads = new mongoose.Schema({
    name :  String,
    date_created : String,
    id : Number,
    ads_id :  String,
},{
timestamps : true
})

const google_ads_model =  mongoose.model("google_ads",google_ads)


module.exports = google_ads_model