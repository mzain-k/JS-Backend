import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const response = await cloudinary.upload.uploader(localFilePath, {
            resourse_type: "auto"
        })
        console.log("File uploaded successfully", response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved file
        console.log(`File upload Failed: ${error}`)
        return null
    }
}


cloudinary.uploader
  .upload("my_image.jpg")
  .then(result=>console.log(result));