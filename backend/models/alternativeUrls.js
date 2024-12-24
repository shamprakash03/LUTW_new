const mongoose = require('mongoose')


const alternative_urls = new mongoose.Schema({
    main_url : {
        type : String,
        required : true
    },
    alter_url : String,
    title : String,
    comments : String,
    options : String,
    image : String,
    mode : String,
    date_created : String,
    id : Number,
    user_id : String,
    votes : String,
    deleted : String,
    alt_url : String,
    count : Number,
    flag : String,
    fn : String,
    category : String,
},{
    timestamps : true
})


const alternativeModel =  mongoose.model("alternative_urls",alternative_urls)


module.exports = alternativeModel