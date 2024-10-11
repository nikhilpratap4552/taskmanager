
"use client";
import Image from "next/image";
import formimage from '../../public/undraw.svg'
import { useState } from "react";
import { addTask } from "@/services/taskServices";
import { toast } from "react-toastify";


const metadata={
    title: "Add Task : Work Manager",
    description: "add task to work manager",
}
export default function AddTask(){
   const [task, settask] = useState({
    title: "",
    content: "",
    status: "none",
    userId:"",
   });

   const handleTask = async (event) => {
    event.preventDefault();
    //console.log(task);

    // validate task
    try {
        const result = await addTask(task);
        //console.log(result);
        toast.success("your task added", {
            position: "top-center",
        });
        settask({
            title: "",
            content:"",
            status:"",
        })
    } catch (error) {
        console.log(error);
        toast.error("failed to add task", {
            position: "top-center",
        })
    }
   }
    return(
        <>
        <div className="text-black  grid grid-cols-12 bg-gradient-to-r from-blue-300 to-blue-500 justify-center h-screen">
            <div className="col-span-6 col-start-4 p-5 max-sm:col-start-2 max-sm:col-span-10">
                <div className="flex justify-center">
                    <Image src={formimage} alt="image for form" width={211} />
                </div>
                <h1 className="text-center"> Add your task </h1>
                <form action={'#'} onSubmit={handleTask} className="isolate  p-4 rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5">
                    <div>
                        <label htmlFor='task_title' className="block text-sm font-medium">
                            Title
                        </label>
                        <input name="task_title" onChange={(event) => {
                            settask({
                                ...task,
                                title: event.target.value,
                            });
                        }}
                        value={task.title} type='text'  className="w-full border-2  text-slate-950  bg-white/10 p-2.5 rounded-md" id="task_title" placeholder="title"/>
                    </div>
                    <div>
                        <label htmlFor='task_content' className="block text-sm font-medium">
                            content
                        </label>
                        <textarea rows={5} name="task_content" onChange={(event) => {
                            settask({
                                ...task,
                                content: event.target.value,
                            });
                        }}
                        value={task.content} type='text' className=" border-2 w-full text-gray-900  bg-white/10 p-2.5 rounded-md" id="task_title" placeholder="content"/>
                    </div>
                    <div>
                        <label htmlFor='task_status' className="block text-sm font-medium">
                            Status
                        </label>
                        
                        <select name="task_status" onChange={(event) => {
                            settask({
                                ...task,
                                status: event.target.value,
                            });
                        }}
                        value={task.status} className="bg-slate-300 text-slate-900 rounded-lg">
                            <option value="none"  disabled>--select status---</option>
                            <option value="pending">pending</option>
                            <option value="completed">completed</option>
                        </select>

                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="bg-blue-600  py-2 px-3 rounded-lg hover:bg-cyan-800 m-2 animate-bounce">Add Todo</button>
                        <button className="bg-orange-600 py-2 px-3 rounded-lg hover:bg-cyan-800 m-2"> Clear</button>
                    </div>
                </form>
                {/* {JSON.stringify(task)} */}
            </div>
        </div>
        </>
    );
}