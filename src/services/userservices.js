import { httpAxios } from "@/helper/httphelper";

export async function Signup(user){
    const result= await httpAxios.post("/api/users", user).then((response)=> response.data);
    return result;
}

export async function login(logindata) {
    const result =await httpAxios
    .post("/api/login", logindata)
    .then((response) => response.data);
    return result;
    
}
export async function currentUser() {
    const result =await httpAxios
    .get("/api/current")
    .then((response) => response.data);
    return result;
    
}
export async function logout() {
    const result =await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
    return result;
    
}
export async function gettask(userId) {
    const result =await httpAxios
    .get(`/api/users/${userId}/task`)
    .then((response) => response.data);
    return result;
}
