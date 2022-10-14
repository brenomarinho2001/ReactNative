
import React from "react"

import { View,Text,StyleSheet,TouchableOpacity, FlatList, SafeAreaView, Image, Button, TextInput, ImageBackground} from "react-native"
import Header from "./Header"
import Poke from "./Poke"

import { useState, useEffect } from "react"




export default function Pokes() { 

  const [id,setId] = useState(2)
  const [name,setName] = useState('pikachu')
  const [Namepoke,setNamepoke] = useState('caterpie')
  const [procurarpoke,setprocurarpoke] = useState('')
  const [poke,setpoke] = useState([])
  const [frontImage,setFrontImage] = useState('')
  const [backImage,setBackImage] = useState('')
  const [abilities,setAbilities] = useState([])
  const [error,seterror] = useState('')

  useEffect(
      ()=>{

         fetch(`https://pokeapi.co/api/v2/pokemon/${Namepoke}`)
         .then(
          (response)=>{
              return response.json()
          }
         )
         .then(
          (responseJson)=>{
              //console.log(responseJson.name)
              setName(responseJson.name)
              setFrontImage(responseJson.sprites.front_default)
              setBackImage(responseJson.sprites.back_default)
              setAbilities(responseJson.abilities)
              setId(responseJson.id)
              seterror('')
              
          }
         )
         .catch((error)=>{seterror('Não encontramos esse pokemon! :( tente novamente')})

      }
      ,
      [Namepoke]
  )
   

  function mudarnome(nome){
    var n = nome.toLowerCase();
    setprocurarpoke(n)
    console.log(n)
  }

  function procurar(){
    setNamepoke(procurarpoke)
    console.log(setNamepoke)
  }

  return (
      <View style={styles.container}>

          <View style={styles.principal}>
          <Text style={styles.textoprinciapal}>PESQUISE UM POKEMON:</Text>
          <TextInput placeholder=" Nome do pokemon" style={styles.inputs} onChangeText={(texto)=> mudarnome(texto)}></TextInput>
          <Button title="PROCURAR" onPress={procurar} color={'red'}></Button>
          </View>

          <View style={styles.pokemon}>
          <Text style={styles.title}>Nome do Pokemon: {name.toUpperCase()}</Text>
          <Text style={styles.title}>#{id}</Text>

          <View style={styles.images}>
              <ImageBackground source={{uri:'https://i.pinimg.com/originals/05/8c/c1/058cc1913cf7d2bd93d6153ad22205f5.png'}} style={styles.backimage}>
              <Image style={styles.imagepoke} source={{uri:frontImage,width:200,height:200}} />
              </ImageBackground>

              <ImageBackground source={{uri:'https://i.pinimg.com/originals/05/8c/c1/058cc1913cf7d2bd93d6153ad22205f5.png'}} style={styles.backimage}>
              <Image style={styles.imagepoke} source={{uri:backImage,width:150,height:150}} />
              </ImageBackground>
          </View>
          <Text>{error}</Text>
          </View>          
      </View>
  )
}


const styles = StyleSheet.create({
  bodysheet:{
    flex:9,
  
  },
  inputs:{
    height:50,
    width:'100%',
    borderWidth: 1,
    marginRight: 1,
    marginLeft:1,
    borderRadius: 10,
    padding:2,
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
    margin:25,
    marginTop:50,
    marginBottom: 50,
 
  },
  textoprinciapal:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold'
  
  },
  principal:{
    margin:40,
    width:'80%',
  },
  btts:{
    width:'100%'
  },
  pokemon:{
  height:'100%',
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'center'
  },
  images:{
  flexDirection:'row'
  },
  imagepoke:{
    
    setBackImage:'https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png',
    borderRadius:120,
    height:150,
    width:150,
    margin:20,
  },
  backImage:{
    opacity:.5,
  }

})

