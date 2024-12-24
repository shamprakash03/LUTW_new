const googleFavProjects = require("../../models/google_fav_projects");

async function googleFavVideoController(req,res){
    // console.log(req);
    // console.log(res);
 try{
    //    var fff = []
       const videosTable = await googleFavProjects.find({type : 'youtube',user_id : '30'})
    //    console.log(fff.push(videosTable));
      //  console.log("googleFav-->",videosTable);
       res.json({
        message: "success data",
        error: false,
        success: true,
        data: videosTable,
       })
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = googleFavVideoController;