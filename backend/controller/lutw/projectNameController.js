const google_interest_project_model = require("../../models/googleInterestProject");
const user = require("../../models/user");

async function projectNameController(req,res){
    var yy = req.body;
    
    const userIds = yy.map(item => Number(item.project_id));
     

 try{
        const query = {id: {$in: userIds}}
       const userDb = await google_interest_project_model.find(query);
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

module.exports = projectNameController;