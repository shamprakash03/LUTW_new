const mongoose = require("mongoose");

async function connectionDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
}
////mongodb+srv://shamprakash:Sham@7550@cluster0.4fah67p.mongodb.net/lutw_all_db
////mongodb+srv://shamskavi03:sham7550@signupecommerce.dpvvdst.mongodb.net/Mern-Product?retryWrites=true&w=majority&appName=SignupEcommerce
module.exports = connectionDb;


