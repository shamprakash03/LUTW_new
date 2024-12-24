const category = require("../../models/category");

async function categoryController(req,res){
 try{
    if(req.userId){
        throw new Error("Permission denied")
       }
       const categoryDb = await category.find().sort()
    //    console.log(categoryDb)
       res.json({
        message: "Category successfully",
        error: false,
        success: true,
        data: categoryDb,
       })
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = categoryController;