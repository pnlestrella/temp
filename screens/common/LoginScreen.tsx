import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'context/auth/auth.hook';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
//For stack types 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/types/navigation';


export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const {login} = useAuth();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
        <Text>This is login</Text>
        {/* Email inputs */}
        <TextInput value={email} onChangeText={setEmail} placeholder='Enter your email'/>
        <TextInput secureTextEntry={true} value={password} onChangeText={setPassword} placeholder='Enter your password'/>
        <Button title='Submit' onPress={() => login(email, password)}/>

        <Button title="Register" onPress={() => navigation.navigate('register')}/>

    </View>
  );
};
