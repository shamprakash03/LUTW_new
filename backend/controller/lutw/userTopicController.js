const category = require("../../models/category");
const google_interest_project_model = require("../../models/googleInterestProject");

async function userTopicController(req,res){
    const category1 = req.body;
 try{
    //    console.log(category1.id);
        
            const category_id = await google_interest_project_model.find({user_id : category1.value})  //{category_id: category1.id}
           res.json({
            message: "Category successfully",
            error: false,
            success: true,
            data: category_id,
           })
        
       
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = userTopicController;