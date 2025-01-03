import mongoose from "mongoose";

// const ConnectDB=async()=>{
//     const url=process.env.MONGO_URL
//     mongoose.connect(url!).then(()=>console.log("database Conntected")).catch((e)=>console.log(e))
// }
export  const ConnectDB=()=>{
    mongoose.connect(process.env.MONGO_URL!,{
        dbName:"Clerk",
    }).then(c=>console.log(`database connected ${c.connection.host}`)).catch(e=>console.log(e));
   
};

export default ConnectDB;

