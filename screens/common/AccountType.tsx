import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types/navigation';

import appLogo from '../../assets/images/app_logo.png';
import jobSeeker from '../../assets/images/jobSeeker.png';
import Employer from '../../assets/images/Employer.png';
import { useAuth } from 'context/auth/auth.hook';

const { width } = Dimensions.get('window');

export const AccountType = () => {
  const {setUserType, userType} = useAuth();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [selected, setSelected] = useState<'jobseeker' | 'employer'>('jobseeker');
  const [settledType, setSettledType] = useState<'jobseeker' | 'employer'>('jobseeker');

  const position = useSharedValue(0); // 0 = jobseeker, 1 = employer

  const handleSelect = (type: 'jobseeker' | 'employer') => {
    setSelected(type);
    const targetValue = type === 'jobseeker' ? 0 : 1;

    position.value = withTiming(targetValue, { duration: 100 }, () => {
      runOnJS(setSettledType)(type); // This runs after animation completes
    });
  };

  const sliderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(position.value * (width * 0.5 - 16), {
            duration: 600,
          }),
        },
      ],
    };
  });



  const isActive = (type: 'jobseeker' | 'employer') => settledType === type;
  return (
    <SafeAreaView className="flex-1 items-center justify-center px-4 bg-white">
      <Image source={appLogo} style={{ width: 250, height: 95 }} resizeMode="contain" />

      <Text style={styles.titleText}>Who are you?</Text>

      <Text className="text-center mr-10 ml-10 mt-4 mb-10 mx-10 text-[14px] text-black">
        Choose one account type so that we know who to pair you up with.
      </Text>

      {/* Sliding Highlight Bar */}
      <View className="flex-row w-full justify-between relative p-1 rounded-2xl">
        <Animated.View
          style={[
            {
              position: 'absolute',
              height: 250,
              width: width * 0.5 - 16,
              backgroundColor: '#6C63FF',
              borderRadius: 20,
              zIndex: 0,
            },
            sliderStyle,
          ]}
        />

        {/* Job Seeker */}
        <Pressable
          onPress={() => handleSelect('jobseeker')}
          className="flex-1 items-center p-4 rounded-2xl z-10"
        >
          <Image source={jobSeeker} className="mb-5 w-[100px] h-[100px]" resizeMode="contain" />
          <Text
            style={[
              styles.accountTypeText,
              { color: isActive('jobseeker') ? 'white' : 'black' },
            ]}
          >
            Job Seeker
          </Text>
          <Text
            style={{
              color: isActive('jobseeker') ? 'white' : 'black',
              textAlign: 'center',
              fontSize: 14,
            }}
          >
            This account type is for those looking for employment.
          </Text>
        </Pressable>

        {/* Employer */}
        <Pressable
          onPress={() => handleSelect('employer')}
          className="flex-1 items-center p-4 rounded-2xl z-10"
        >
          <Image source={Employer} className="mb-5 w-[100px] h-[100px]" resizeMode="contain" />
          <Text
            style={[
              styles.accountTypeText,
              { color: isActive('employer') ? 'white' : '#1A1A1A' },
            ]}
          >
            Employer
          </Text>
          <Text
            style={{
              color: isActive('employer') ? 'white' : 'black',
              textAlign: 'center',
              fontSize: 14,
            }}
          >
            This account type is for those looking for employees.
          </Text>
        </Pressable>
      </View>

      {/* Dynamic navigation button */}
      <Pressable
        onPress={() =>{
            setUserType(selected)
            console.log(selected)
            navigation.navigate("register"
            // selected === 'jobseeker' ? 'registrationScreenJS' : 'registrationScreenEmployer'
          )
        }
          
        }
        className="bg-[#6C63FF] px-20 py-4 rounded-xl mt-40"
      >
        <Text className="text-white font-bold text-center">Proceed</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Lexend-Bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#6C63FF',
  },
  accountTypeText: {
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    marginBottom: 5,
  },
});
