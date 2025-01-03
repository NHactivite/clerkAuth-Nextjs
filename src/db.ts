import mongoose from "mongoose";

const ConnectDB=async()=>{
    const url=process.env.MONGO_URL
    mongoose.connect(url!).then(()=>console.log("database Conntected")).catch((e)=>console.log(e))
}

export default ConnectDB;

