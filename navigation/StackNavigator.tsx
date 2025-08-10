import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "context/auth/auth.hook";
import { HomeScreen } from "screens/common/HomeScreen";
import { LoginScreen } from "screens/common/LoginScreen";
import { RegisterScreen } from "screens/common/RegisterScreen";
import {AccountType} from "screens/common/AccountType"

const Stack = createNativeStackNavigator();

export  function StackNavigator(){
    //import useContext- useAuth for general calling
    const {user} = useAuth()

    return(
        //stacks for routing
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={!user? "login" : "home" }>
                {!user?(
                    //users not logged in
                    <>
                        <Stack.Screen name="login" component={LoginScreen} />
                        <Stack.Screen name="accountType" component={AccountType} />
                        <Stack.Screen name="register" component={RegisterScreen}/>
                    </>
                ):(
                    //Logged in users
                    <>
                      <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>
                    </>
                )
                }
            </Stack.Navigator>
        </NavigationContainer>
   
    )
}