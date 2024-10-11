'use client'
import Image from 'next/image';
import signup from '../../public/signup.svg';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Signup } from '@/services/userservices';
export default function SignUp(){
    const [user, setuser] = useState({
        name:"",
        email:"",
        password:"",
        about:"its a user created at desktop",
        profileURL:"/user/newuser",
    });
    const handlesubmit = async (event)=> {
        event.preventDefault();
        console.log(event);
        if(user.name.trim()=== '' || user.name== null){
            toast.warning("name is blank", {
                position: "top-center",
            })
            return;
        }

        try {
           const result= await Signup(user)
           toast.success("Successfull Signup",{
            position:"top-center",
           });
           setuser({
            name:"",
            email:"",
            password:"",
            about:"its a user created at desktop",
            profileURL:"/user/newuser",
           })
        } catch (error) {
            console.log(error);
            toast.warning("Failed to Signup",{
                position:"top-center",
            });
        }

    }
    const resetform= (event)=>{
        setuser({
            name:"",
            email:"",
            password:"",
            about:"its a user created at desktop",
            profileURL:"/user/newuser",
        })
    }
    return(
        <>
        <div className="container grid grid-cols-12  justify-center h-screen text-black">
            <div className="col-span-6 col-start-4 xl:col-span-4 xl:col-start-5">
                <div className='flex justify-center mt-4'>
                        <Image src={signup} alt='signup img' width={212} />
                    </div>
                <div className="mt-4 rounded-xl bg-white/35 shadow-lg">
                    
                    <h1 className="text-center font-semibold mt-14">SignUp</h1>
                    <form className="mt-5 p-2" onSubmit={handlesubmit}>

                        <div className="mt-3">
                            <label htmlFor="username" className="text-sm font-medium mb-2 ps-2">
                                Username
                            </label>
                            <input name='username'
                            onChange={(event)=> setuser({
                                ...user,
                                name: event.target.value,
                            })} value={user.name} className="w-full p-2 text-white rounded-lg bg-gray-800" type="text" placeholder="enter name" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="useremail" className="text-sm font-medium mb-2 ps-2">Email</label>
                            <input name='useremail'
                            onChange={(event)=> setuser({
                                ...user,
                                email: event.target.value,
                            })} value={user.email} id="email" className="w-full p-2 text-white rounded-lg bg-gray-800" type="email" placeholder="enter email" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="userpassword" className="font-medium text-sm mb-2 ps-2">Password</label>
                            <input name='userpassword' onChange={(event)=> setuser({
                                ...user,
                                password: event.target.value,
                            })} value={user.password} className="bg-gray-800 p-2 text-white rounded-lg w-full" type="text" placeholder="password"/>
                        </div>
                        <div className="mt-3 text-center">
                            <button type='submit' className="px-2 text-white bg-green-500 rounded-md hover:bg-green-900 m-2 p-2"> SignUp</button>
                            <button onClick={resetform} className="px-2 bg-orange-600 rounded-md hover:bg-red-700 m-2 p-2"> Reset</button>
                        </div>
                    </form>
                </div>
                {/* {JSON.stringify(user)} */}

            </div>
        </div>
        </>
    );
}