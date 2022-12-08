const dotenv = require("dotenv");
dotenv.config();
const cloudinaryConfig = require("cloudinary").v2;

cloudinaryConfig.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

module.exports = cloudinaryConfig;
