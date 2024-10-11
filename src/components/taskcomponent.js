import { FaDeleteLeft } from "react-icons/fa6";
import Usercontext from '@/usecontext/usercontext';
import React, { useContext, useState } from 'react'
import { set } from "mongoose";

const Taskcomponent = ({task, deletetask}) => {
  // const [uuser, setuser] =useState({
  //   status:'',
  // })
  const {user} =useContext(Usercontext);
  return (
    <>
    <div className={` shadow-lg m-2 capitalize rounded-lg  ${task.status == "completed" ? "bg-green-600" : "bg-gray-400 motion-safe:animate-bounce hover:animate-none mt-8"}`}>
        <div className='p-2  font-semibold flex justify-between'>
            <h1 className='text-xl'>{task.title}</h1>
            <span onClick={()=>{
              deletetask(task._id);
            }} className="text-gray-950 text-xl cursor-pointer hover:text-slate-900"><FaDeleteLeft /></span>
        </div>
        <div className='p-2 font-normal'>
            <p>{task.content}</p>
        </div>
        <div className='p-2 flex justify-between cursor-pointer'>
          <p className='text-left'>status : <span 
           className='text-sm font-bold hover:text-emerald-900  uppercase'> {task.status}
            {/* <select onChange={()=>{
              updatestatus(task._id)
            
            }} value={task.status} className="bg-transparent">
            <option disabled> {task.status}</option>
            <option value={'pending'}> pending </option>
            <option value={'completed'}> completed </option>
            </select> */}
            </span></p>
          <p className='text-right'>Authur : <span className='font-bold hover:text-green-900 cursor-pointer'> {user?.name}</span></p>
        </div>
    </div>
    </>
    
  )
}

export default Taskcomponent;