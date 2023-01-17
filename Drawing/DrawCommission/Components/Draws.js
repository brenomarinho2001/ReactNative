import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useState } from 'react';

let ss = 0
let ss_initial = ss
let mm = 5
let mm_inital = mm
let timer = null

let imagem_passada = 0


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Draws({ navigation}) {

  const [botaoPlay,setBotaoPlayer] = useState('INICIAR')
  const [segundos,setSegundos] = useState(ss)
  const [minutos,setMinutos] = useState(mm)

  const [imagens,setImagens] = useState(
    [require('../Imagens/1.png'),
    require('../Imagens/2.png'),
    require('../Imagens/3.png'),
    require('../Imagens/4.png'),
    require('../Imagens/5.png'),
    require('../Imagens/6.png'),
    require('../Imagens/7.png'),
    require('../Imagens/8.png'),
    require('../Imagens/9.png'),
    require('../Imagens/10.png'),


  ])

  const [imgSelecionada, setImgSelecionada] = useState(0)


  function proximo(){
    imagem_passada = imgSelecionada

    
    setImgSelecionada(Math.floor(Math.random() * imagens.length))
    
  
    
  }

  function reiniciar(){
    ss = ss_initial
    mm = mm_inital
    setMinutos(mm_inital)
    setSegundos(ss_initial)
    clearInterval(timer)
    setBotaoPlayer('INICIAR')
    return    
  }

  function play(){

      

      if(botaoPlay == 'INICIAR'){
        timer = setInterval(()=>{
        

          if(ss >= 0 && mm >= 0){
            if(ss > 0){
              ss--;
              setSegundos(ss)
            }
            

            
            if(ss < 1 && mm > 0){
              mm -= 1
              setMinutos(mm)
              ss = 59
            }

          }
          
          
          
  
          
        },1000)
        setBotaoPlayer('PAUSAR')
      }
      else{
        setBotaoPlayer('INICIAR')
        clearInterval(timer)
      }


      
      

  }

  return (  
    <View style={styles.container}>

      <View style={{height:100,height:50,margin:5,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <MaterialCommunityIcons name="timer" style={{marginRight:10,marginLeft:10}} size={35}/>
          <Text>{mm < 10 ? '0' + mm:mm}:{ss < 10 ? '0' + ss : ss} </Text>
          <Text style={{fontStyle:'italic'}}>{mm == 0 && ss == 0 ? 'ACABOU TEMPO!' : ''}</Text>
        </View>
        
        <View>
        <MaterialCommunityIcons onPress={()=> navigation.navigate('Home')}name="home" style={{marginRight:10,marginLeft:10}} size={35} />
        </View>
      </View>

     

      
      <View style={{borderWidth: 1,borderStyle:'dashed',flex:3,backgroundColor:'black',borderRadius:10,marginRight:10,marginLeft:10}} >
        <Image source={imagens[imgSelecionada]} style={{width:'100%',borderRadius:10,height:'100%'}}></Image>
      </View>


      <View style={{flex:1,justifyContent:'flex-start',backgroundColor:'red '}}>
        <View style={{height:200}}>
          
          <View style={{height:80,flexDirection:'row',display:'flex'}}>
            
            <TouchableOpacity style={{borderWidth: 1,borderStyle:'dashed',flex:1,justifyContent:'center',borderRadius:5,margin:10}} onPress={play}><Text style={{textAlign:'center',fontStyle:'italic'}}>{botaoPlay} </Text></TouchableOpacity>
            <TouchableOpacity onPress={reiniciar} style={{borderWidth: 1,borderStyle:'dashed',backgroundColor:'#CDCDCD',flex:1,justifyContent:'center',borderRadius:5,margin:10}}><Text style={{textAlign:'center',fontStyle:'italic'}} >REINICIAR</Text></TouchableOpacity>
          </View>
          <View style={{height:80,flexDirection:'row'}}>
          <TouchableOpacity onPress={proximo} style={{borderWidth: 1,borderStyle:'dashed',backgroundColor:'#CDCDCD',flex:1,justifyContent:'center',borderRadius:5,margin:10}}><Text style={{textAlign:'center',fontStyle:'italic'}} >PROXIMO </Text></TouchableOpacity>
          </View>          

         
        </View>
        
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:0
    
  },
});
