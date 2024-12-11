import { atom } from "jotai";
import IUserBase from "./iUserBase";

const defaultUser:IUserBase = {
    username:"User",
    email:""
};
const User = atom(defaultUser)

export const readWriteUser = atom( (get)=>get(User), (get, set)=>{
    set(User, get(User));
} )