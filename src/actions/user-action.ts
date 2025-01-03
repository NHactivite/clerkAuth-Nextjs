"Use server"

import ConnectDB from "@/db";
import User from "@/models/user-model";

export async function createUser(user:any){
    try {
        await ConnectDB();
        const newUser=await User.create(user);

        return JSON.parse(JSON.stringify(newUser));
        
    } catch (error) {
        console.log(error);
        
    }
}