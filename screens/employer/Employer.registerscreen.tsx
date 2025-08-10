import { useAuth } from '../../context/auth/auth.hook';
import { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const EmployerRegisterScreen = () => {
  const {registerJSeekers, userType} = useAuth(); 
  alert(userType)
  console.log(userType, "test")

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')


  function handleRegister(){
    if(!email || !password){
      alert("Fields should not be empty.")
      return;
    }

    if(password !== confirmPassword){
      alert("Password must be the same.")
      return;
    }

    //Register JobSeeker
    registerJSeekers(email,password)   

  }
  return (
    <SafeAreaView>
      <Text>This is Employer Register Screen</Text>

      {/* Email input */}
      <TextInput value={email} onChangeText={setEmail}/>
      <TextInput secureTextEntry={true} value={password} onChangeText={setPassword}/>
      <TextInput secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword}/>
      <Button title='Submit' onPress={handleRegister}/>
      <Button title='ee' onPress={() => alert(userType)}/>
    </SafeAreaView>
  );
};
