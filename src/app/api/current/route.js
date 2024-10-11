import { connectDb } from "@/helper/db";
import { User } from "@/model/user";
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";

export async function GET(request) {
    
        const authtoken= await request.cookies.get("authToken")?.value;
    // console.log(authtoken);
    if(!authtoken){
        return NextResponse.json({
            message:"user not login"
        });
    }
    const data= jwt.verify(authtoken, process.env.JWT_KEY);
    //console.log(data);
    await connectDb();
    const user= await User.findById(data._id).select("-password");
    //console.log(user);

    return NextResponse.json(user); 

    
    
}