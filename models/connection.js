import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/portfolio";
mongoose.connect(url);
console.log("mongoDB has been conncted successfully");
