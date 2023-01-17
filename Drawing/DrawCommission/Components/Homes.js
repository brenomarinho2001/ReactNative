import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

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

export default function Home({ navigation, route}) {
  const [fontsLoaded] = useFonts({
    sketch: require("../assets/fonts/S.ttf"),
    })

    
  return (  
    
    <View style={styles.container}>

    <View><Text style={{fontFamily:'sketch',fontSize:50}}>DRAW IT</Text></View>
      <TouchableOpacity onPress={()=>navigation.navigate('Draw')} style={{borderWidth: 1,borderStyle:'dashed',width:'80%',backgroundColor:'#CDCDCD',margin:10,height:50,justifyContent:'center',borderRadius:5}}><Text style={{textAlign:'center'}} >Começar</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Config')}  style={{borderWidth: 1,borderStyle:'dashed',width:'80%',backgroundColor:'#CDCDCD',margin:10,height:50,justifyContent:'center',borderRadius:5}}><Text style={{textAlign:'center'}} >Configurações</Text></TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:0,
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 1,
    borderStyle:'dashed',
    margin:10
  },
  
});
