const user = require("../../models/user");

async function memberUserNameController(req,res){
    var yy = req.body;
    const userIds = yy.map(item => item.member_user_id); 
 try{
        const query = {id: {$in: userIds}}
       const userDb = await user.find(query);
       
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

module.exports = memberUserNameController;