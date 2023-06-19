import mongoose, { mongo } from "mongoose";

const connectDB = (url) =>{
    //strictQuery is useful for saarch functionality
    mongoose.set('strictQuery', true);

    mongoose.connect(url).then(()=> console.log('MongoDB connected'))
    .catch((err)=>console.log(err));
}

export default connectDB;