const mongoose = require('mongoose')


const payment = new mongoose.Schema({
    email : {
        type : String,
        required : true
     },
    sub_id : {
        type : String,
        required : true
     },
     pay_id : {
        type : String,
        required : true
     },
     cus_id : String,
     plan_id : {
        type : String,
        required : true
     },
     sign : String,
     due_date : {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
     status : String,
},{
timestamps : true
})

const payment_model =  mongoose.model("payment",payment)


module.exports = payment_model