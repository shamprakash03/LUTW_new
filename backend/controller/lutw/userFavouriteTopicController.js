const google_favModel = require("../../models/googleFav");
const userfavouriteTopic = require("../../models/userfavouriteTopic");

async function userfavouriteTopicController(req,res){
    const rr = req.body
    
 try{
       const userfavouriteTopicDb = await userfavouriteTopic.find(rr)
       var yyy = userfavouriteTopicDb.map(item => ({
        ...item,
        project_id: Number(item.project_id)
       }))
      const ttt = yyy.map(item => item.project_id)
      
      const query = {project_id: {$in: ttt}}
      const googleFavDb = await google_favModel.find(query)
      
       res.json({
        message: "Product updated successfully",
        error: false,
        success: true,
        data: {"project":googleFavDb,"user":userfavouriteTopicDb},
       })
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = userfavouriteTopicController;