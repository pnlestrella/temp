
import './global.css';
import { StackNavigator } from './navigation/StackNavigator'
import { AuthProvider } from 'context/auth/auth.provider';

export default function App() {
     return (
          <AuthProvider>
               <StackNavigator />
          </AuthProvider>
     )
}
