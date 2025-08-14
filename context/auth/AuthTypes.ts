import {User} from 'firebase/auth'

export type AuthTypes ={
    user: User| null;
    accountType: string;
    login: (email:string, password:string) => Promise<void>;
    registerJobseeker: (email:string, password:string) => Promise<void>;
    registerEmployer: (email:string, password:string) => Promise<void>;
    setAccountType: (value: string) => void

}