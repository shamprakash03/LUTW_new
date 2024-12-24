const mongoose = require('mongoose')


const subscription = new mongoose.Schema({
     subscription_id : String,
     plan_id : String,
},{
timestamps : true
})

const subscription_model =  mongoose.model("subscription",subscription)


module.exports = subscription_model