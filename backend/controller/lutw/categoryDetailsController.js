const category = require("../../models/category");
const google_interest_project_model = require("../../models/googleInterestProject");

async function categoryDetailController(req,res){
    const category1 = req.body;
    // console.log(category1.id);
 try{
    if(req.userId){
        throw new Error("Permission denied")
       }
       const categoryDb = await category.find().sort()
    //    console.log(category1.id);
        if(category1.id != undefined){
            const category_id = await google_interest_project_model.find({category_id: category1.id})  //{category_id: category1.id}
            // console.log("tttt-->",category_id);
           res.json({
            message: "Category successfully",
            error: false,
            success: true,
            data: category_id,
           })
        }
       
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = categoryDetailController;