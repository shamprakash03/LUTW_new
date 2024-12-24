const google_interest_project_model = require("../../models/googleInterestProject");

async function subtopicAllController(req,res){
    var yy = req.body;
    const userIds = yy.map(item => item.id); 
    console.log(userIds);
    
 try{
        const query = {parent_id: {$in: userIds}}
       const userDb = await google_interest_project_model.find(query);
       
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

module.exports = subtopicAllController;