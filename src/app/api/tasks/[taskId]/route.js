

// get a task

import { Task } from "@/model/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {taskId} = params;
    try {
        const task = await Task.findById(taskId);
        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to get task by id",
            success:false,
        })
    }
    
}
// update task

export async function PUT(request, {params}) {
    try{
        const {taskId}= params;
        const {title, content, status} = await request.json();
        
        let task = await Task.findById(taskId);
        
        (task.title= title), (task.content=content), (task.status=status);
        const updatedtask = await task.save();
        return NextResponse.json(updatedtask);
    } catch(error){
        return NextResponse({
            message:"failed to update task",
            success: false,
        })
    }
}

// post task


export async function DELETE(request, {params}) {
const {taskId}= params;
try {
    await Task.deleteOne({
        _id:taskId,
    });
    return NextResponse.json({
        message:"task deleted",
        success:true,
    })
} catch (error) {
    return NextResponse.json({
        message:"task failed to delete",
        success:false,
    })
}
    
}