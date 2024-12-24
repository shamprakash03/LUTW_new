const pageDetails = require("../../models/pageDetails");

async function pageDetailsController(req,res){
    const hari = req.body
    var userLogin = Object.values(hari)
    const uuu = userLogin.map(item => item.url_id)
    
 try{
    const query = {id: {$in: uuu}}
       const pageDetailsDb = await pageDetails.find(query)
       res.json({
        message: "Product updated successfully",
        error: false,
        success: true,
        data: pageDetailsDb,
       })
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = pageDetailsController;