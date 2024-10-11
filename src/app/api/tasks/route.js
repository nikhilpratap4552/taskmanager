import { Task } from "@/model/task";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { connectDb } from "@/helper/db";
connectDb();


// all task
export async function GET(request) {
    try {
        const tasks = await Task.find();
        return NextResponse.json(tasks);
    } catch (error) {
        return NextResponse.json({
            message:" failed to get tasks",
            success:false,
        })
        
    }
}

// create task
export async function POST(request) {
    const {title, content, userId, status} = await request.json();
    const authtoken= request.cookies.get("authToken")?.value;
    const data= jwt.verify(authtoken, process.env.JWT_KEY);
    //console data id of current user
    console.log(data._id);


    try {
        const task = new Task({
            title,
            content,
            userId:data._id,
            status,
        });
      const taskcreated= await task.save();

      return NextResponse.json(taskcreated, {
        status:201,
      })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to create task",
            success:false,
        })
        
    }
}