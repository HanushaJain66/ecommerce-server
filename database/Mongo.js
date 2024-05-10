// mongod.js
const dotenv = require('dotenv');
dotenv.config({
  path: "./Config/config.env",
});
const mongoose = require("mongoose");

exports.Mongod = () => {
  mongoose
    .connect(process.env.DATABASE, {
      dbName: "UserAuth",
    })
    .then(() => {
      console.log("Database Connected!!");
    }) 
    .catch((e) => console.log(e));
};
