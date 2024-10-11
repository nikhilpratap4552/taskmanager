'use client';
import { useEffect, useState } from "react";
import Usercontext from "./usercontext";
import { toast } from "react-toastify";

import { currentUser } from "@/services/userservices";

export default function UserProvider({children}){
    const [user, setuser]= useState(undefined);
    useEffect(()=>{
        async function fetchdata() {
             try {
        const currentuser = await currentUser();
        setuser({...currentuser});
    } catch (error) {
        //console.log(error);
        // toast.error("error in loading current user");
        setuser(undefined);
    }
        }
        fetchdata();
       
    },[])

    
    return(
        <Usercontext.Provider value={{user, setuser}}>
            {children}
        </Usercontext.Provider>
    );
}