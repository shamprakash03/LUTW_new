const category = require("../../models/category");

async function categoryWiseArticleController(req,res){
    // console.log(req);
 try{
    if(req.userId){
        throw new Error("Permission denied")
       }
       const categoryWiseArticleDb = await category.find()
    //    console.log(categoryWiseArticleDb);
       res.json({
        message: "Product updated successfully",
        error: false,
        success: true,
        data: [categoryWiseArticleDb],
       })
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = categoryWiseArticleController;