import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

  export async function GET(){
    const {userId}=await auth();
    const user=await currentUser();

    if(!user){
        return NextResponse.json(
            {  
                 success: false,
                message:"Not-Authenticated",
            },{
                status:401
            }
        )
    }

    return NextResponse.json(
        {  
             success: true,
            message:"Authentication",
            data:{userId:userId,username:user?.fullName}
        },{
            status:200
        }
    )
  }