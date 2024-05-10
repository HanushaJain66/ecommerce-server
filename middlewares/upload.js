const dotenv = require('dotenv');
dotenv.config({
  path: "./Config/config.env",
});
const cloudinary = require("cloudinary").v2;
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

const upload=async(filepath)=>{
    const result = await cloudinary.v2.uploader.upload(filepath, {
        folder: "products",
      });
    return result;
    
}

module.exports=upload;