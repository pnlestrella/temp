import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "screens/Home";
import { RegisterScreen } from "screens/RegisterScreen";
import { LoginScreen } from "screens/LoginScreen";
import { RootStackParamList } from "./types/RootStackParamList";
import { useAuth } from "context/auth/AuthHook";

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function StackNavigator(){
    const {user} = useAuth()

    console.log(user)




    return(
        <Stack.Navigator initialRouteName={user ? "home" : "login"}>
            {user? (
            <Stack.Screen name="home" component={Home} options={{headerShown:false}}/>

            ): (
                <>
                <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
                <Stack.Screen name="register" component={RegisterScreen} />
                </>
            )}


        </Stack.Navigator>
    )
}