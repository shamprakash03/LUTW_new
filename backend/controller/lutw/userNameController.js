const user = require("../../models/user");

async function userNameController(req,res){
    var yy = req.body;
    // console.log(yy);
    
    var userLogin = Object.values(yy)
    
    const uuu = userLogin.map(item => ({
        ...item,
        user_id: Number(item.user_id)
    }))
    const userIds = uuu.map(item => item.user_id); 

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

module.exports = userNameController;