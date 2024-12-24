const google_interest_project_model = require("../../models/googleInterestProject");
const user = require("../../models/user");

async function singleProjectNameController(req,res){
    var yy = req.body;
    // console.log(yy);
 try{
       const userDb = await google_interest_project_model.find(yy);
  
       
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

module.exports = singleProjectNameController;