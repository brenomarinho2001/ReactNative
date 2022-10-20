import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight: 30



export default function InitialScreen({ navigation }) {
  return (
    <>
    <View style={styles.container}>
      <View style={{ backgroundColor: "#7614B1", flex: 1 }}>
          <View style={styles.imgQui}>
            <Image source={require('../Imagens/QuiguiaLogo.png')}/>
          </View>
  
      </View>
      <View style={{ backgroundColor: "#7CA1B4", flex: 9 }}>
        <ImageBackground style={styles.imageminicial} source={require('../Imagens/jovens.png')}>
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <AntDesign name="arrowright" size={50} color="white" />
            </TouchableOpacity>
            
          </View>
        </ImageBackground>
        
      
      </View>
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
  },
  imgQui:{
    height:'100%',
    width:'100%',

    justifyContent:'center'
  },
  footer:{
    height:'10%',
    width:'100%',
    paddingRight:10,
    paddingBottom: 10,
    justifyContent:'center',
    alignItems:'flex-end'
  },
  imageminicial:{
    height:'100%',
    width:'100%',
    justifyContent:'flex-end'
  }
});
