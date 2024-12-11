import IUserBase from "../interfaces/iUserBase";

export default class User implements IUserBase{
    public username: string = "";
    public email: string = "";
    
    public User(_username:string, _email:string){
        // initialize user
        this.username = _username;
        this.email = _email;
    }
}