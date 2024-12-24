// const jwt =  require('jsonwebtoken');
// // const token =jwt.sign({userId: 1234},process.env.TOKEN_SECRET_KEY,{expiresIn: '5678h'})
// async function authToken(req, res, next) {
//     try{
//       const tokenArray = req.rawHeaders;
//       console.log("iiii-->", tokenArray);
//       const tokenElement = tokenArray.find(item => item.includes('token='))
//       console.log("yyyy-->", tokenElement);
//     //   console.log(tokenElement);
//       const token = tokenElement ? tokenElement.split('=')[1]: undefined;
//       console.log("token-->", token);
//        if(!token){
//         return res.status(200).json({
//             message:"User not logged in",
//             error: true,
//             success: false,
//             data: []
//         })
//        }
//       jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
//         // console.log("tokenError-->", err);
//         // console.log("decoded-->", decoded);
//         if(err){
//             // console.log("Error-->", err);
//         }
//         // console.log("usrid-->", req.userId);
//         // console.log("deOid-->",decoded?._id);
//         req.userId = decoded?._id
//         next();
//       })
//     }catch(err) {
//         res.status(400).json({
//             message: err.message || err,
//             data: [],
//             error: true,
//             success: false
//         })
//     }
// }

// module.exports = authToken;