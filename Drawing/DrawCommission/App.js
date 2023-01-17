import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Draws from './Components/Draws';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Drawss from './Components/Draws'
import Homess from './Components/Homes'
import Config from './Components/Config'

import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App({route}) {

  const [tempo,setTempo] = useState(3)

  function mudaTempo(v){
    setTempo(v)
  }

  return (  
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Homess} />
          <Stack.Screen name="Draw" component={Drawss} />
           
        </Stack.Navigator>
      </NavigationContainer>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:40
    
  },
});
