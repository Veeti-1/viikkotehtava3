
import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react'
import { RootStackParamList } from '../types/navigation'
import { Appbar } from 'react-native-paper';
import HomeScreen from '../screens/homeScreen';
import SecondScreen from '../screens/secondScreen';
type Props = NativeStackScreenProps<RootStackParamList,'Home'>
import { getHeaderTitle } from '@react-navigation/elements';
export default function NavigationBar({navigation ,route}:Props){
   useLayoutEffect(() => {
    navigation.setOptions({
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: '#fff' },
    headerRight: () => (
    <Ionicons
    name="arrow-forward"
    size={24}
    color="#fff"
    style={{ marginRight: 0, padding: 0 }}
    onPress={() => {
        if(String(route) === 'Home'){
        navigation.navigate('secondScreen',{message:'test'})

        }else{
            <Ionicons
            name="arrow-back"
            size={24}
            color="#fff"
            style={{ marginRight: 0, padding: 0 }}
            
            />
        navigation.navigate('Home')

        }
    
    }}
    />
    ),
    });
    }, [navigation]);
return (
        <Appbar.Header
        mode='center-aligned'
        elevated={true}
        >
        <Appbar.Content title="Navigation Bar" />
        </Appbar.Header>
);
};
