const category_model = require("../../models/category");
const user = require("../../models/user");

async function categoryNameController(req,res){
    var yy = req.body;
    var userLogin = Object.values(yy)
    const uuu = userLogin.map(item => (
        {
        ...item,
        catrgory_id: Number(item.category_id)
    }))
    const userIds = uuu.map(item => item.category_id);

 try{
        const query = {id: {$in: userIds}}
       const userDb = await category_model.find(query);
       res.json({
        message: "Product updated successfully",
        error: false,
        success: true,
        data: userDb,
       })
 }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
}
}

module.exports = categoryNameController;