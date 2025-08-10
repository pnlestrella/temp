import { useAuth } from '../../context/auth/auth.hook';
import { Button, Text, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const HomeScreen = () => {
  const {user, logout} = useAuth();


  console.log(user)
  return (
    <SafeAreaView>
      <Text>Hello there {user?.email} this is Homescreen</Text>
      <Button title='Logout' onPress={logout}/>
    </SafeAreaView> 
  );
};
