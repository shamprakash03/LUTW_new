const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username : String,
    lastname : String,
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : String,
    deleted : Number,
    account_type : String,
    default_color : String,
    picture : String,
    date_created : String,
    date_modified : String,
    id : Number,
    login_page : String,
    isUninstall : Number,
    keyword : String,
    isEmailConfirm : String,
    isEmailTopic : String,
    isShardTopic : String,
    highlightEmail : String,
    isEmailWebmark : String,
    darkMode : String,
    current_topic : String,
    rating : String,
    user_img : String,
    bio : String,
    user_name : String,
    user_notify : Number,
    chrome_id : String,
    user_notify_landing : Number,
    free_user : String,
    subscripition_user : String,
    special_user : String,
    donation_popup : String,
    donation_popup_days_left : String,
    highlight_on_off : Number,
    public_highlight_on_off : Number,
    alternative_site_on_off : Number,
    simili_on_off : Number,
    sidepopover_on_off : Number,
    BrowserBookmarkImported : Number,
},{
    timestamps : true
})


const userModel =  mongoose.model("userLogin",userSchema)


module.exports = userModel