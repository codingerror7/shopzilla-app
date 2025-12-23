import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});
const uploadOnCloudinary = async (filepath) => {
    try {
        if(!filepath){
            return null;
        }
        //TO UPLOAD FILES ON CLOUDINARY
        const uploadResult = await cloudinary.uploader.upload(filepath,{folder : "ecommerce"});
        //TO DELETE FILES FROM PUBLIC FOLDER AFTER THEY ARE UPLOADED TO CLOUDINARY
       //RETURN URL OF THE UPLOADED FILE
       return uploadResult.secure_url
    } catch (error) {
        console.log(error);
    }
}

const uploadAllImages = async ()=>{
    try {
        //TO FIND FILES UNDER UPLOADS FOLDER
        const folderpath = path.join(process.cwd(),"uploads");
        //READ EACH FILENAME IN UPLOADS FOLDER
        const files = fs.readdirSync(folderpath);
        const urls = []; //ARRAY TO STORE ALL FILE URLs 

        for(let file of files){
            const filepath = path.join(folderpath,file);
            console.log("uploading:",file);
            const url = await uploadOnCloudinary(filepath);
            if(url){
                urls.push({filename : file,url});
                console.log(file,"uploaded->",url);
            }
            fs.unlinkSync(filepath);
        }
        console.log("all uploads complete..");
        return urls;
    } 
    catch (error) {
        console.log(error);
    }

}
//uploadAllImages().then(urls=>console.log("urls:",urls)).catch((error)=>console.log(error));


