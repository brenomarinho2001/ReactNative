import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useState } from 'react';



import { useFonts } from 'expo-font';

let ss = 0
let ss_initial = ss
let mm = 5
let mm_inital = mm
let timer = null

let imagem_passada = 0


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

export default function Config({ navigation, tempo,t}) {
    const [fontsLoaded] = useFonts({
    sketch: require("../assets/fonts/S.ttf"),
    })

    function alo(){
        alert('oi')
    }

    const [timer,setTimer] = useState(10)
    
    function mudar(v){
      setTimer(v)
      
    }

  return (  
    
    <View style={styles.container}>

      <View><Text style={{fontFamily:'sketch',fontSize:110}}>DRAW IT</Text></View>
      
      <Text>TEMPO DE DESENHO: {timer.toFixed(0)} minutos</Text>
      <Slider style={{width:300}} value={timer} minimumValue={0} maximumValue={50} onValueChange={(v) =>mudar(v)}></Slider>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{borderWidth: 1,borderStyle:'dashed',width:'80%',backgroundColor:'#CDCDCD',margin:10,height:50,justifyContent:'center',borderRadius:5}}><Text style={{textAlign:'center'}} >Voltar</Text></TouchableOpacity>
      <Text></Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:0,
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderStyle:'dashed',
    margin:10
  },
  
});
