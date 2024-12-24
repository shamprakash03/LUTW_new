const mongoose = require('mongoose')


const subscription_payment = new mongoose.Schema({
    plan_id : String,
    plan_month : String,
    subscription_id : String,
     user_id : String,
     subscription_start : Date,
     subscription_end : Date,
     subscription_status : String,
     payment : String,
     payment_id : String,
    recurring_count : String,
     topic_count : Number,
     id : Number,
     remaining_topic_count : String,
     remaining_days : String,
     remaining_webmark_count : String,
},{
timestamps : true
})

const subscription_payment_model =  mongoose.model("subscription_payment",subscription_payment)


module.exports = subscription_payment_model