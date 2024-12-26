const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      `mongodb+srv://nikhilvora:Nikhil@cluster0.bvfwl.mongodb.net/adminpenal`
    );
    console.log(`mongodb successfully connect`);
  } catch (err) {
    console.error(err);
    return false;
  }
};
module.exports = connectDB();