const category_model = require("../../models/category");
const user = require("../../models/user");

async function singleCategoryNameController(req,res){
    var yy = req.body;
    //  console.log(yy);
 try{
       const userDb = await category_model.find({id:Number(yy.value)});
    //    console.log(userDb);
       res.json({
        message: "Product updated successfully",
        error: false,
        success: true,
        data: userDb,
       })
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = singleCategoryNameController;