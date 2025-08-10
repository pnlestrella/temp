import {User} from 'firebase/auth'

export type AuthTypes = {
    user: User | null;
    login: (email:string, password:string) => Promise<void>;
    logout: () => Promise<void>;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void
    //usertypes
    userType: 'jobseeker' | 'employer' | '';
    setUserType: (value: 'jobseeker' | 'employer' | '') => void;

    //Job Seekers
    registerJSeekers: (email:string,password:string) => Promise<void>;

}