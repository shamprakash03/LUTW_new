const highlightsDetails = require("../../models/highlightDetails");

async function highlightsDetailsController(req,res){
    const sham  = req.body;
    // console.log(sham);
    
 try{
       const highlightsDetailsDb = await highlightsDetails.find(sham)
    //    console.log(highlightsDetailsDb);
       res.json({
        message: "Product updated successfully",
        error: false,
        success: true,
        data: highlightsDetailsDb,
       })
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = highlightsDetailsController;