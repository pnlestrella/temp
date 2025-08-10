import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'context/auth/auth.hook';
import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Image,Pressable } from 'react-native';
//For stack types 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/types/navigation';

import { Lock, Mail } from 'lucide-react-native';

import appLogo from '../../assets/images/app_logo.png'

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const {login} = useAuth();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

   return (
    <View className="flex-1 items-center justify-center px-8 bg-white">
      {/* Logo Section */}
      <View className="items-center mb-8">
        <Image source={appLogo} className="w-[330px] h-[95px]" resizeMode="contain" />
      </View>

      {/* Login Header */}
      <View className="w-full max-w-md mb-8">
        <Text style={styles.titleText}>Login</Text>
        <Text style={styles.subHeaderText}>Welcome back, connect now!</Text>
      </View>

      {/* Form Section */}
      <View className="w-full max-w-md space-y-4">
        {/* Email Input */}
        <View>

          <View className="flex-row items-center mb-2">
            <Mail size={18} color="#616161" />
            <Text style={styles.fieldHeader} className="ml-2 mt-2">Email</Text>
          </View>


          <TextInput
            className="border border-gray-300 rounded-lg p-3 mb-5"
            placeholder="johndoe@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View>

          <View className="flex-row items-center mb-2">
            <Lock size={18} color="#616161" />
            <Text style={styles.fieldHeader} className="ml-2 mt-2">Password</Text>
          </View>

          <TextInput
            className="border border-gray-300 rounded-lg p-3"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Checkbox & Forgot Password */}
        <View className="flex-row justify-between items-center mt-2 mb-4">
          <Pressable onPress={() => alert("Forgot password feature is currently under development. Please check back soon!")}>
            <Text className="text-sm text-[#1572DB] font-semibold">Forgot password?</Text>
          </Pressable>
        </View>

        {/* Login Buttons */}
        <View className="space-y-4 mt-4">
          <Pressable
            onPress={() => login(email, password)}
            className="bg-[#6C63FF] px-6 py-3 rounded-lg items-center justify-center"
          >
            <Text className="text-white font-bold text-center">Login as Job Seeker</Text>
          </Pressable>

          <View className="flex-row justify-center items-center my-2">
            <View className="border-b border-gray-300 flex-1" />
            <Text className="text-gray-500 mt-3 mb-3 mx-3 text-sm font-bold">
              Not A Job Seeker?
            </Text>
            <View className="border-b border-gray-300 flex-1" />
          </View>

          <Pressable
            onPress={() => alert("Screen Still on Progress")}
            className="bg-[#1572DB] px-6 py-3 rounded-lg items-center justify-center"
          >
            <Text className="text-white font-bold text-center">Login as Employer</Text>
          </Pressable>
        </View>

        {/* Register Link */}
        <Text className="justify-center text-center mt-5">
          Don&apos;t have an account?
          <Pressable onPress={() => navigation.navigate('accountType')}>
            <Text className="text-[#6C63FF] font-bold"> Register now.</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Lexend-Bold',
    fontSize: 22,
    marginBottom: 2,
  },
  subHeaderText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8E8E8E',
    marginLeft: 1,
  },
  fieldHeader: {
    fontFamily: 'Lexend-Medium',
    color: '#616161',
    fontSize: 14,
    marginBottom: 10,
  },
  textInput: {
    fontFamily: 'Poppins-Regular',
  },
});
