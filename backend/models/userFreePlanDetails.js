const mongoose = require('mongoose')


const user_free_plan_details = new mongoose.Schema({
     user_id : {
        type : String,
        required : true
     },
     remaining_topic : String,  
     no_of_donation : String,
     date_created : String,
     date_mofified : String,
    id : Number,
     total_amount_paid : String,
     free_user_validity_end : Date,
     free_user_remaining_days : String,
},{
timestamps : true
})

const user_free_plan_details_model =  mongoose.model("user_free_plan_details",user_free_plan_details)


module.exports = user_free_plan_details_model