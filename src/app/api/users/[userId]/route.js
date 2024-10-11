import { User } from "@/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


// find user by id
export async function GET(request,{params}){
    const {userId}= params;
     const user = await User.findById({
        _id:userId,
     });
     return NextResponse.json(user);
}

// update user by id

export async function PUT(request, {params}){
    const {userId} = params;

    const {name, password, about, profileURL} = await request.json();

    try {
        const user = await User.findById(userId);
        user.name = name;
        user.about = about;
        user.password = password;
        user.profileURL= profileURL;

        const upDateuser = await user.save();
        return NextResponse.json(upDateuser);
    } catch (error) {
        return NextResponse({
            message: "user is not updated",
            success:false, 
        })
        
    }

}

// delete an user by id 
export async function DELETE(request, {params}){
    const {userId}= params;

    try {
       await User.deleteOne({
            _id:userId
        });
        return NextResponse.json({
            message:"user deleted",
            success: true,
        });
    } catch (error) {
        
        return NextResponse.json({
            message:"error in testing delete",
            success:false,
        })
    }
}