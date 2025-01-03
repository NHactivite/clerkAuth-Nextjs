"use server"

import ConnectDB from "@/db";
import User from "@/models/user-model";

interface IUser {
    clerkId: string;
    email: string;
    photo?: string;
    firstName?: string | null;
    lastName?: string | null;
}

export async function createUser(user:IUser){
    try {
        await ConnectDB();
        const newUser=await User.create(user);

        return JSON.parse(JSON.stringify(newUser));
        
    } catch (error) {
        console.log(error);
        
    }
}