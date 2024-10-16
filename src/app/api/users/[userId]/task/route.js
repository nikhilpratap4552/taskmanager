import { Task } from "@/model/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {userId} = params;

    try {
        const tasks = await Task.find({
            userId:userId,
        });
        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"task not found",
            success: false,
        })

    }
    
}