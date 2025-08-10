import { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types/navigation';
import { useAuth } from 'context/auth/auth.hook';
import justLogo from '../../assets/images/justLogo.png';
import { Mail, Lock } from 'lucide-react-native';
import Constants from 'expo-constants';

//Modal
import { OTPModal } from '../../components/OTP.modal'

//Firebase AUTH
import { registerJobSeeker } from '~/firebase/firebaseAuth';

export const JobsSeekerRegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { registerJSeekers, userType, isLoading, setIsLoading } = useAuth();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  //show modal state
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Modal state

  async function onVerify() {

    //Validations for inputs
    if (!email || !password || !firstName || !lastName) {
      alert("Please fill in all required fields");
      return;
    }
    //email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    //passwords validation
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    if (password.length < 6 && confirmPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }




    //USER registration FIREBASE
    const registerFirebaseUser = await registerJobSeeker(email, password)
    console.log(registerFirebaseUser.user.uid, registerFirebaseUser.user.email, ' ------------------')

    //USER Registration MONGODB
    const user = {
      seekerUID: registerFirebaseUser.user.uid,
      email: email,
      fullName: {
        firstName: firstName,
        middleInitial: middleInitial,
        lastName: lastName
      },
      industries: null,
      skills: null,
      status: true,
      accountIncomplete: true
    }
    console.log(user)

    try {
      const response = await fetch(`${Constants?.expoConfig?.extra?.BACKEND_BASE_URL}/api/jobseekers/registerJobSeeker`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      console.log(response)
      console.log("Account created successfully")
    } catch (err) {
      console.log(err)
    }
  }

  
  return (
    <View className="flex-1 bg-white">
      <View className="items-center justify-center mt-10 pt-10 px-10">
        {/* Header with logo and title */}
        <View className="flex-row items-center w-full max-w-md">
          <Image source={justLogo} className="w-20 h-20" resizeMode="contain" />
          <View className="ml-1 flex-1">
            <Text style={style.titleText}>Create an account</Text>
            <Text style={style.subHeaderText} className="ml-1">
              Find your jobs with one swipe
            </Text>
          </View>
        </View>

        {/* Form fields */}
        <View className="w-full max-w-md mt-8">

          {/* Email */}
          <View className="mb-4">
            <View className="flex-row items-center mb-2">
              <Mail size={18} color="#616161" />
              <Text style={style.fieldHeader} className="ml-2">Email</Text>
            </View>
            <TextInput
              className="border border-gray-300 rounded-md p-3"
              placeholder="johndoe@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* First Name */}
          <View className="mb-4">
            <Text style={style.fieldHeader} className="mb-2">First Name</Text>
            <TextInput
              className="border border-gray-300 rounded-md p-3"
              placeholder="John"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          {/* Middle Initial */}
          <View className="mb-4">
            <Text style={style.fieldHeader} className="mb-2">Middle Initial (If applicable)</Text>
            <TextInput
              className="border border-gray-300 rounded-md p-3"
              placeholder="i.e M."
              maxLength={2}
              value={middleInitial}
              onChangeText={setMiddleInitial}
            />
          </View>

          {/* Last Name */}
          <View className="mb-4">
            <Text style={style.fieldHeader} className="mb-2">Last Name</Text>
            <TextInput
              className="border border-gray-300 rounded-md p-3"
              placeholder="Doe"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          {/* Password */}
          <View className="mb-4">
            <View className="flex-row items-center mb-2">
              <Lock size={18} color="#616161" />
              <Text style={style.fieldHeader} className="ml-2">Password</Text>
            </View>
            <TextInput
              className="border border-gray-300 rounded-md p-3"
              placeholder="Create a password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Confirm Password */}
          <View className="mb-10">
            <View className="flex-row items-center mb-2">
              <Lock size={18} color="#616161" />
              <Text style={style.fieldHeader} className="ml-2">Confirm Password</Text>
            </View>
            <TextInput
              className="border border-gray-300 rounded-md p-3"
              placeholder="Confirm your password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          {/* Register Button */}
          <Pressable
            onPress={() => setShowSuccessModal(true)}
            className="bg-[#6C63FF] px-6 py-4 rounded-xl w-full"
          >
            <Text className="text-white font-bold text-center">Register</Text>
          </Pressable>
        </View>

      </View>

      <OTPModal
        //loading properties
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        userType={userType}
        email={email}
        onVerify={onVerify}
        visible={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        onSubmit={() => setShowSuccessModal(false)}
      />
    </View>
  );
}

const style = StyleSheet.create({
  titleText: {
    fontFamily: 'Lexend-Bold',
    fontSize: 24,
    marginBottom: 2,
  },
  subHeaderText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#A1A1A1',
  },
  fieldHeader: {
    fontFamily: 'Lexend-Bold',
    color: '#37424F',
    fontSize: 14,
  },
  textInput: {
    fontFamily: 'Poppins-Regular',
  },
});
