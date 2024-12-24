const googleFavProjects = require("../../models/google_fav_projects");

async function googleFavImageController(req,res){
    // console.log(req);
    // console.log(res);
 try{
       
       const googleFavDb = await googleFavProjects.find({user_id : '73'}).sort()
       res.json({
        message: "success data",
        error: false,
        success: true,
        data: googleFavDb,
       })
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = googleFavImageController;