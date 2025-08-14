import { useState } from 'react';
import { Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'navigation/types/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from 'context/auth/AuthHook';
import Constants from 'expo-constants'


type NavigationProp = NativeStackNavigationProp<RootStackParamList>

export const JSRegisterScreen = () => {
  const { registerJobseeker } = useAuth()

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigation = useNavigation<NavigationProp>();

  async function handleRegister() {
    //verification first


    //after verifying

    // const register = await registerJobseeker(email, password)
  }
  alert(Constants.expoConfig?.extra?.FIREBASE_API_KEY)

  return (
    <SafeAreaView>
      <Text>JOBSEEKER Register Screen</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder='Enter your email'></TextInput>
      <TextInput style={styles.input} onChangeText={setFirstName} value={firstName} placeholder='Enter your First Name'></TextInput>
      <TextInput style={styles.input} onChangeText={setMiddleInitial} value={middleInitial} placeholder='Enter your Middle initial'></TextInput>
      <TextInput style={styles.input} onChangeText={setLastName} value={lastName} placeholder='Enter your Last Name'></TextInput>
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder='Enter your Password'></TextInput>
      <TextInput style={styles.input} onChangeText={setConfirmPassword} value={confirmPassword} placeholder='Confirm Your Password'></TextInput>
      <Button title={"Submit"} onPress={() => handleRegister()} />
      <Text>Already have an accounnt? <TouchableOpacity onPress={() => navigation.navigate('login')}><Text>SignIn here</Text></TouchableOpacity></Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, marginVertical: 8, padding: 8, borderRadius: 4 }
});
