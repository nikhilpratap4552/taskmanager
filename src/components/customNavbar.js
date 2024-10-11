'use client'
import { logout } from "@/services/userservices";
import Usercontext from "@/usecontext/usercontext";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function CustomNavBar(){
    const context = useContext(Usercontext);
    const router = useRouter();

   async function dologout(){
        try {
            const result = await logout();
            context.setuser(undefined);
            router.push("/login");
        } catch (error) {
            console.log(error);
            toast.error("logout error",{
                position:"top-center"
            });
        }
    }
    return(
        <>
        <nav className="bg-blue-600 h-16 py-2 px-4 flex justify-between text-white">
            <div className="">
                <h1 className='text-xl font-semibold'>
                    <Link href='/'>Task manager</Link>
                </h1>

            </div>
            <div>
                <ul className='flex space-x-5 mr-2'>
                    {context.user && (
                        <>
                        <li>
                             <Link href='/addtask'>Add task</Link>
                        </li>
                        <li>
                            <Link href='/showtask'>Show Task</Link>
                         </li> 
                        </>

                    )}
                    
                </ul>
            </div>
            <div className="t">
                <ul className="flex gap-4">
                    {context.user && (
                        <>
                        <li>
                            <Link href={'#'} >{context.user.name}</Link>
                        </li>
                        <li>
                            <button  onClick={dologout} >Logout</button>
                        </li>

                        </>
                    )}
                    {!context.user && (
                        <>
                        <li>
                            <Link href='/login'>Login</Link>
                         </li>
                        <li>
                            <Link href='/signUp'>SignUp</Link>
                        </li>
                        </>
                    )}
                    
                </ul>
            </div>
        </nav>
        </>
    );
}