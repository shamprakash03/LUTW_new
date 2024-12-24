const mongoose = require('mongoose')


const family_tree = new mongoose.Schema({
    id: Number,
    parent_id : String,
    child_id : String
},{
    timestamps : true
})


const family_treeModel =  mongoose.model("family_tree",family_tree)


module.exports = family_treeModel