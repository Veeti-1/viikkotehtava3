
import { Button } from 'react-native-paper';
import { Appbar, Props } from 'react-native-paper';
import type { StackHeaderProps } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

export default function NavigationBar({navigation,route,options,back}:StackHeaderProps){
  

 const title = getHeaderTitle(options,route.name)


return (
        <Appbar.Header>
        <Appbar.Content style={{marginRight:30}} title={title} />
        {back ? <Appbar.BackAction style={{marginLeft:-50}} onPress={navigation.goBack}/> 
        : 
         <Appbar.Action

         icon="arrow-right"
         onPress={()=>navigation.navigate("secondScreen")}
         />
        
        
                }

        </Appbar.Header>
);
};
