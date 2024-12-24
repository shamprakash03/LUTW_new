const googleFavProjects = require("../../models/google_fav_projects");

async function googleFavProjectsController(req,res){
    const tt = req.body;
    // console.log(tt);
    
 try{
       
       const googleFavDb = await googleFavProjects.find(tt)
    //    console.log(googleFavDb);
       
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

module.exports = googleFavProjectsController;