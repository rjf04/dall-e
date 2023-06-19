import express, { response } from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';
import fs from 'fs';

dotenv.config();

const router=express.Router();

const configuration=new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai= new OpenAIApi(configuration);

router.route('/').get((req,res ) =>{
    res.send('Hello from DALL-E!');
})

router.route('/').post(async(req,res)=>{
    try{
        const {prompt}=req.body;

        // const aiResponse= await openai.createImage({
        //     prompt,
        //     n:1,
        //     size: '1024x1024',
        //     response_format: 'b64_json'
        // })
        // const image=aiResponse.data.data[0].b64_json;



        // Read the image file as binary data
        const imageFile = 'C:/Users/lenovo/backEnd/Dally Project/server/minions.jpeg'; // Replace with the path to your image file
        const imageData = fs.readFileSync(imageFile);

        // Convert binary data to base64 encoding
        const image = imageData.toString('base64');


        res.status(200).json({photo:image});
    }
    catch(error){
        console.log(error);
        //res.status(500).send(error?.response.data.error.message)
    }
})

export default router;
