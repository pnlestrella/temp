import { useState } from 'react';
import { Text, TextInput, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'navigation/types/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from 'context/auth/AuthHook';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>

export const EmployerRegisterScreen = () => {
    const {registerEmployer} = useAuth()

    const [email,setEmail] = useState('');
    const [password, setPassword]= useState('')
    const navigation = useNavigation<NavigationProp>();

    async function handleRegister(email:string,password:string){
            const register = await registerEmployer(email,password)
    }

  return (
    <SafeAreaView>
        <Text>EMPLOYERS Register Screen</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder='Enter your email'></TextInput>
        <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder='Enter your password here'></TextInput>
        <Button title={"Submit"} onPress={() => handleRegister(email,password)}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, marginVertical: 8, padding: 8, borderRadius: 4 }
});
