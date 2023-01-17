import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';



import Slider from '@react-native-community/slider';



export default function Sliderc() {
  
  const [valor,setValor] = useState(50)

  return (
    <View style={styles.container}>
      
      <Slider
      minimumValue={0}
      maximumValue={100}
      value={valor}
      onValueChange={setValor}
      minimumTrackTintColor='red'
      maximumTrackTintColor='red'
      

      style={{width:300}}
      ></Slider>
      <Text>{Math.floor(valor)}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
