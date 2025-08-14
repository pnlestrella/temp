import { ReactNode, useEffect, useMemo, useState } from "react"
import { AuthContext } from "./AuthContext"
import { AuthTypes } from "./AuthTypes"
import { userLogin, jobseekerRegister } from "firebase/firebaseAuth"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [user,setUser] = useState<AuthTypes['user']|null>(null)
    const [accountType, setAccountType] = useState('')


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
        })
        return unsubscribe
    },[])


    async function login(email:string, password:string){
        try{
            const login = await userLogin(email,password)
            console.log(login)
        }catch(err){
            alert(err)
            console.log(err)
            return
        }
    }

    //registration for Job seeker
    async function registerJobseeker(email: string, password:string){
        try{
           const register = await jobseekerRegister(email, password)
           alert('Successfully registered')
        }catch(err){
            console.log(err)
            return;
        }
    }


    const value = useMemo(() => ({user, login,registerJobseeker}),[user])
    return(
        <AuthContext value={value}> 
            {children}
        </AuthContext>
    )
}