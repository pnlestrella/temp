import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'context/auth/AuthHook';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AccountType = () => {

    //navigation
    const navigation = useNavigation()

    const {setAccountType} = useAuth()

    function handleJobSeeker(){
        setAccountType('jobseeker')
        navigation.navigate('register')
    }

    function handleEmployer(){
        setAccountType('employer')
        navigation.navigate('register')
    }


  return (
    <SafeAreaView>
      <Text>Pick Account Type</Text>
      <Button title='Jobseeker' onPress={handleJobSeeker} />
      <Button title='Employer'  onPress={handleEmployer}/>
    </SafeAreaView>
  );
};
