import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react'
import { RootStackParamList } from '../types/navigation'
type Props = NativeStackScreenProps<RootStackParamList,'Home'>
export default function HomeScreen({navigation}:Props) {
  
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
onPress={() => navigation.navigate('secondScreen',{message:'test'})}
/>
),
});
}, [navigation]);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen!</Text>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },text : {
    fontSize:20,
    fontWeight: 'bold'
  }
});
