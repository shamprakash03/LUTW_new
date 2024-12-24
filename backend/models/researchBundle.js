const mongoose = require('mongoose')


const research_bundle = new mongoose.Schema({
   
     project_id : {
        type : String,
        required : true
     },
     user_id : {
        type : String,
        required : true
     },
     date_created : String,
    id : Number,
     deleted : String
},{
timestamps : true
})

const research_bundle_model =  mongoose.model("research_bundle",research_bundle)


module.exports = research_bundle_model