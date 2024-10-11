import { NextResponse } from "next/server";
import { User } from "@/model/user";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import { connectDb } from "@/helper/db";
connectDb();


export async function POST(request){
    
    const {email, password} = await request.json()
    try {
        // get user
        const user= await User.findOne({
            email:email,
        })
        if(user == null){
            throw new Error("user not found");
        }
        // checked password
        const matched = bcryptjs.compareSync(password, user.password);
        if(!matched){
            throw new Error("password not matched");
        }
        // generate a tocken
        const token=jwt.sign({
            _id:user._id,
            name:user.name
        }, process.env.JWT_KEY);
        

        // create nextresponse cookies

        const response = NextResponse.json({
            message:"login successfully",
            success:true,
            user:user,
        },{
            status:200,
        });
        response.cookies.set("authToken", token, {
            expiresIn:"1d",
            httpOnly:true,
        });
        //console.log(token);
        return response;
        
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success:false,
        },{
            status:500,
        });
    }
}