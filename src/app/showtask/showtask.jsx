'use client'
import Taskcomponent from '@/components/taskcomponent';
import { deleteTask, updateStatus } from '@/services/taskServices';
import { gettask } from '@/services/userservices';
import Usercontext from '@/usecontext/usercontext';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Showtask = () => {
   
    const [tasks, settasks] = useState([]);
    const context = useContext(Usercontext);
    async function loadtasks(userId) {
        try {
            const alltasks = await gettask(userId);
            settasks([...alltasks]);
            //console.log(tasks);
            //console.log(alltasks)
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(()=>{
        if(context.user){
            loadtasks(context.user._id);
        }
    },[context.user ]);

    async function taskdeleted(taskid){
        

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    
                  });
                  deleteTask(taskid);
                 const newtask = tasks.filter((item)=> item._id != taskid);
            settasks(newtask);
            toast.success("task deleted successfully",{
                position:"top-center",
            })
                }
              });
   
    }
     //async function updatetask(taskid) {
         
    //     try {
    //         setuser(user);
    //         await updateStatus(taskid,user);
    //         toast.success("task update",{
    //             position:"top-center",
    //         })
    //     } catch (error) {
    //         toast.error("error in update",{
    //             position:"top-center",
    //         })
    //     }
    // }
  return (
    <>
    <div className='container grid grid-cols-12 mt-3 h-screen'>
       
        <div className='col-span-8 col-start-3 max-sm:col-span-10 max-sm:col-start-2'>
            <div className='text-center'>
                <h className=" text-3xl text-slate-800 font-semibold">Your Tasks ({tasks.length})</h>
            </div>
            
            <div className='p-4'>
                {tasks.map((task)=>(
                    <Taskcomponent task={task} deletetask={taskdeleted}   key={task._id}/>
                ))}
            </div>
        </div>
        </div>
    </>
    
  )
}

export default Showtask;