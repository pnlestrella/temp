// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyC-jdwgJsZJgYMg57pjIYL0ir2eOZ13gpQ",
  authDomain: "test-90782.firebaseapp.com",
  projectId: "test-90782",
  storageBucket: "test-90782.firebasestorage.app",
  messagingSenderId: "881546491561",
  appId: "1:881546491561:web:a92421a2225cd9f2729bb8",
  measurementId: "G-0DQ0G4BHYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})

export {auth}