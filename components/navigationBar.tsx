
import { Button } from 'react-native-paper';
import { Appbar, Props } from 'react-native-paper';
import type { StackHeaderProps } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';
export default function NavigationBar({navigation,route,options,back}:StackHeaderProps){
  

 const title = getHeaderTitle(options,route.name)


return (
        <Appbar.Header>
        <Button mode='contained' onPress={()=>navigation.navigate('secondScreen')}>
           {title}
           <Ionicons
            name='arrow-forward'
           size={24}
            color='#fff'
           />
        </Button>
        <Appbar.BackAction onPress={navigation.goBack}/>

        <Appbar.Content title={title} />
        </Appbar.Header>
);
};
