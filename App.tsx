import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/homeScreen';
import SecondScreen from './screens/secondScreen';
import NavigationBar from '../viikkotehtava3/components/navigationBar'
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
 
  return (
    
   <PaperProvider>
   <NavigationContainer>
    
    <Stack.Navigator initialRouteName = 'Home'  screenOptions={{
            header:(props) => <NavigationBar {...props} />,
          }}
        >
    <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
    
    <Stack.Screen name='secondScreen' component={SecondScreen}></Stack.Screen>
    </Stack.Navigator>
<StatusBar style="auto" />
</NavigationContainer>
   </PaperProvider>
  );
}


