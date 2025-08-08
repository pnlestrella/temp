import {User} from 'firebase/auth'

export type AuthTypes = {
    user: User | null;
    login: (email:string, password:string) => Promise<void>;
    logout: () => Promise<void>;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void
    //Job Seekers
    registerJSeekers: (email:string,password:string) => Promise<void>;

}