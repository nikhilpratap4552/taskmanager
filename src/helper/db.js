import { User } from "@/model/user";
import mongoose from "mongoose";

const config ={
    isconnrcting:0,
}

export const connectDb = async() => {
    if(config.isconnrcting){
        return;
    }
    try {
    const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
        dbName: "work_manager",
    });

    console.log("db connected....");
    config.isconnrcting = connection.readyState;
    //console.log(connection);

    // testing and creating new user

    // const uuser = new User({
    //     name: "testnp",
    //     email: "test@npgmail.com",
    //     password: "testpassword",
    //     about:"this is testing"
    // });
    // await uuser.save();

    // console.log("user is created");


    } catch (error) {
        console.log("failed to connect with database");
        console.log(error);
    };
}