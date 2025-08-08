import {auth} from './firebaseSDK'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from 'firebase/auth'


export const loginWithEmailAndPass = async (email:string, password:string) => {
    try{
        //validation
        if(!email || !password){
            throw new Error("Fields must not be empty")
        }
        const login = await signInWithEmailAndPassword(auth,email,password);

        return(login)
    }catch(err){
        throw err
    }

}

export const signoutUser = async () => {
    try{
        const signout = signOut(auth);
    }catch(err){
        throw err
    }

}

//Register Job seeker
export const registerJobSeeker = async (email:string, password:string) => {
    try{
        const jobSeeker = await createUserWithEmailAndPassword(auth,email,password)
        await sendEmailVerification(jobSeeker.user)
        console.log('Confirmation sent')

      

        // return(jobSeeker)
    }catch(err){
        throw err
    }
}
