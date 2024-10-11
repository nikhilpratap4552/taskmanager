'use client'
import { login } from "@/services/userservices";
import Usercontext from "@/usecontext/usercontext";
import bgimg from '../../public/background.jpg'
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useContext, useState } from "react";
import { toast } from "react-toastify";



export default function Login(){
    const router= useRouter();
    const context= useContext(Usercontext);
    const [data, setdata] = useState({
        email:"",
        password:"",
    });
    const loginformdata = async(event)=>{
        event.preventDefault();
        if(data.email.trim() === "" || data.password.trim() === ""){
            toast.info("Invalid Data",{
                position:"top-center",
            });
            return;
        }
        //validate data
        //login  
        try {
            const result = await login(data);
            //console.log(result);
            toast.success("login successfully ",{
                position:"top-center"
            });
            context.setuser(result.user);
            //redirect to main page
            router.push("/");
            return NextResponse.json({
                message:"successfull login",
                status:true,
            });
            

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, {
                position:"top-center",
            });
        }
    }
    return(
        <>
        <div  className="grid grid-cols-12 justify-center h-screen text-slate-900  ">
            <div className="col-span-6 col-start-4 mt-40 xl:col-span-4 xl:col-start-5 ">
                <div className="shadow-lg  bg-white/20 ring-2 ring-slate-400 p-4 rounded-xl">
                    <h1 className="text-center mt-4">Login</h1>
                    <form onSubmit={loginformdata}>
                    <div className="mt-3">
                            <label htmlFor="useremail" className="text-sm font-medium mb-2 ps-2">Email</label>
                            <input name='useremail'
                            onChange={(event)=> setdata({
                                ...data,
                                email: event.target.value,
                            })} value={data.email}
                             id="email" className="w-full p-2 text-white rounded-lg bg-gray-800" type="email" placeholder="enter email" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="userpassword" className="font-medium text-sm mb-2 ps-2">Password</label>
                            <input name='userpassword'
                              onChange={(event)=> setdata({
                                 ...data,
                                 password: event.target.value,
                             })} value={data.password} 
                            className="bg-gray-800 p-2 text-white rounded-lg w-full" type="text" placeholder="password"/>
                        </div>
                        <div className="mt-3 text-center">
                            <button type='submit' className="px-2 bg-green-500 rounded-md hover:bg-green-900 m-2 p-2">Login</button>
                            <button  className="px-2 bg-orange-600 rounded-md hover:bg-red-700 m-2 p-2"> Reset</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
        </>
    );
}