const googleFavProjects = require("../../models/google_fav_projects");
const google_interest_project_model = require("../../models/googleInterestProject");


async function projectArticleViewController(req,res){
   const db = req.body
 try{
       
       const googleInterst = await googleFavProjects.find({project_id:db.value})
       res.json({
        message: "success data",
        error: false,
        success: true,
        data: googleInterst,    
       })
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = projectArticleViewController;