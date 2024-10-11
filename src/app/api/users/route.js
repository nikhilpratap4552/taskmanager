import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/model/user";


connectDb();
export async function GET(){
    // const users = [
    //     {
    //         name: "nitin alwar",
    //         phone: "2626",
    //         course: "node.js"
    //     },
    //     {
    //         name:"nishi agrawal",
    //         phone:"63367",
    //         course:"next.js",
    //     },
    //     {
    //         name:"namish adarsh",
    //         phone:"667555",
    //         course:"system design",
    //     }
    // ];
    let users =[];
    try {
        users = await User.find();
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to get users",
            status:false,
        },{
            status:500,
        });
        
    }
    return NextResponse.json(users);

}


export async function POST(request){
    // fetch user 

    const {name, email, password, about, profileURL } =await request.json();

    // create user object with user model

    const user = new User({
        name,
        email,
        password,
        about,
        profileURL,
    });

    try {
        // save the object to database
        user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));
        const createdUser = await user.save();

        const response = NextResponse.json(user, {
            status: 201,
        });
        return response;
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"failed to create user !!",
            status: false,
        },{
            status:500,
        });
        
    }

}