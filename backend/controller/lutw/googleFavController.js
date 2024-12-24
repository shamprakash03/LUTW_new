const googleFavProjects = require("../../models/google_fav_projects");

async function googleFavController(req,res){
    const tt = req.body;
    
 try{
       
       const googleFavDb = await googleFavProjects.find(tt)
       
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

module.exports = googleFavController;