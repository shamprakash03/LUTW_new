const googleFav = require("../../models/googleFav");
const google_interest_project_model = require("../../models/googleInterestProject");


async function projectArticleController(req,res){
   const db = req.body
//    console.log(db);
   const tt = db.value
 try{
       
       const googleInterst = await google_interest_project_model.findOne({project_name: tt})
      //  console.log(googleInterst);
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

module.exports = projectArticleController;