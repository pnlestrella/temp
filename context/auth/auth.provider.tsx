import { ReactNode, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { AuthTypes } from "./auth.types";

import { loginWithEmailAndPass, signoutUser, registerJobSeeker } from "firebase/firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebase/firebaseSDK'

export const AuthProvider = ({children}: {children:ReactNode}) => {
    const [user,setUser] = useState<AuthTypes['user'] | null>(null);
    const [isLoading, setIsLoading] = useState<AuthTypes['isLoading']>(true)

    //For persistency of the USER
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            if(user){
                alert('user still loggedin')
                //SHOULD BE CHANGED when the MONGODB IS IMPLEMENTED🔴
                setUser(user)
            } 
        })
        return unsubscribe
    },[])
    
    //for the logout
    async function logout(){
        try{
            await signoutUser()
            setUser(prev => prev = null)
            alert("Signed out successfully")
        }catch(err){
            alert(err)
        }
    }

    //for user LOGIN
    async function login(email: string, password: string){
        try{
            const userCredentials = await loginWithEmailAndPass(email,password)
            setUser(userCredentials.user)
            setIsLoading(false)
        }catch(err){
            alert(err)
        }
    }

    //for JOB SEEKER Registration
    async function registerJSeekers(email:string, password:string) {
        try{
            await registerJobSeeker(email,password)
            alert("Registered Successfully")
            setIsLoading(false)
        }catch(err){
            alert(err)
        }
    }

    const value = useMemo<AuthTypes>(() => ({user, logout, login, registerJSeekers, isLoading, setIsLoading}) , [user]);

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}