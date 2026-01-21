import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../types/navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
type Props = NativeStackScreenProps<RootStackParamList,'secondScreen'>;

export default function SecondScreen({ navigation,route }: Props) {
useLayoutEffect(() => {
navigation.setOptions({
headerStyle: { backgroundColor: 'red' },
headerTintColor: '#fff',
});
}, [navigation]);



    return(
        <View style={styles.container}>
            <Text style={styles.text}>SecondScreen!</Text>
            <Text style={styles.text}>{route.params.message}</Text>
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