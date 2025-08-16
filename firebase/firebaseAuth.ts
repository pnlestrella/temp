import {auth} from './config'
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';


export const userLogin = async (email:string, password:string) => {
    try{
        const login = await signInWithEmailAndPassword(auth,email, password);
        return(login)
        } catch (err: any) {
        throw err 
    }
}

export const jobseekerRegister = async (email: string, password: string) => {
    try{
        const register = await createUserWithEmailAndPassword(auth, email, password);
        return(register)
    }catch(err){
        throw err;
    }
}

export const userSignOut = async () => {
    try{
        const logout = signOut(auth);
        return(logout)
    }catch(err:any){
        throw err;
    }
}
