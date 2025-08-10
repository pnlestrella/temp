import { useAuth } from 'context/auth/auth.hook';
import {JobsSeekerRegisterScreen} from '../jobseeker/Jobseeker.registerscreen'
import {EmployerRegisterScreen} from '../employer/Employer.registerscreen'

export const RegisterScreen = () => {
  const {userType} = useAuth(); 

    if (userType === 'jobseeker') {
    return <JobsSeekerRegisterScreen />;
  } else if (userType === 'employer') {
    return <EmployerRegisterScreen />;
  }

  return null
};
