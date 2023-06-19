import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary} from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router=express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

//GET ALL POSTS
router.route('/').get(async(req,res)=>{
    try{
        const posts=await Post.find({});
        console.log("in try of postRoutes")
        res.status(200).json({success: true, data: posts})
    }
    catch(error){
        console.log("eRROr in postRoutes")
        res.status(500).json({success:false, message:error})
    }
})

//CREATE A POST
router.route('/').post(async(req,res)=>{
    try{
    const {name, prompt, photo} = req.body;
    //Uploading photo's URL to cloudinary, data is coming from front end
    const photoUrl = await cloudinary.uploader.upload(photo);
    
    //this will create a new post in the database
    const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.url
    })

    res.status(201).json({success: true, data: newPost});
    }catch(error){
        console.log("error in postRoutes");
        res.status(500).json({success: false, message: error});
    }
});

export default router;