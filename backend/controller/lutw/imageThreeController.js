const google_favModel = require("../../models/googleFav");
// const productModel = require("../../models/productModel");

async function imageThreeController(req,res){
    // console.log(req);
    // console.log(res);
 try{
       const ttt = await productModel.find();
       res.json({
        message: "success data",
        error: false,
        success: true,
        data: ttt,
       })
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = imageThreeController;