import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "context/auth/auth.hook";
import { HomeScreen } from "screens/jobseeker/HomeScreen";
import { LoginScreen } from "screens/common/LoginScreen";
import { RegisterScreenJS } from "screens/common/RegisterScreenJS";

const Stack = createNativeStackNavigator();

export  function StackNavigator(){
    //import useContext- useAuth for general calling
    const {user} = useAuth()

    return(
        //stacks for routing
        <NavigationContainer>
            <Stack.Navigator initialRouteName={!user? "login" : "home" }>
                {!user?(
                    <>
                        <Stack.Screen name="login" component={LoginScreen} />
                        <Stack.Screen name="register" component={RegisterScreenJS}/>
                    </>
                ):(
                    <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>
                )
                }
            </Stack.Navigator>
        </NavigationContainer>
   
    )
}