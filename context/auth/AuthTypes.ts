import {User} from 'firebase/auth'

export type AuthTypes ={
    user: User| null,
    login: (email:string, password:string) => void
    registerJobseeker: (email:string, password:string) => void
}