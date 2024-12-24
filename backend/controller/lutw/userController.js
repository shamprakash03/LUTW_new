const user = require("../../models/user");

async function userController(req,res){
   const tt = req.body

   
 try{

       const userDb = await user.find({email:tt.state})

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

module.exports = userController;