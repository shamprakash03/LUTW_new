const mongoose = require('mongoose')


const donation_payment = new mongoose.Schema({
    emailid : String,
    donation_user_name : String,
    phone : String,
    payment_id : String,
},{
    timestamps : true
})


const productDonationModel =  mongoose.model("donation_payment_details",donation_payment)


module.exports = productDonationModel