import { StatusBar } from 'expo-status-bar';
//import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/homeScreen';
import SecondScreen from './screens/secondScreen';
import { RootStackParamList } from './types/navigation';
import NavigationBar from '../viikkotehtava3/components/navigationBar'
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
 
  return (
    
   <PaperProvider>
    <NavigationBar/>
   <NavigationContainer>
    
    <Stack.Navigator initialRouteName = 'Home'>
    <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
    
    <Stack.Screen name='secondScreen' component={SecondScreen}></Stack.Screen>
    </Stack.Navigator>
<StatusBar style="auto" />
</NavigationContainer>
   </PaperProvider>
  );
}


