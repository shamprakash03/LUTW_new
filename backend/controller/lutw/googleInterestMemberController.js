const googleInterestMember = require('../../models/googleIntrestMembers')
async function googleInterestMembersController(req,res){
    var yy = req.body;
    // console.log(yy);
 try{
       const userDb = await googleInterestMember.find(yy)
//   console.log(userDb);
  
       
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

module.exports = googleInterestMembersController;