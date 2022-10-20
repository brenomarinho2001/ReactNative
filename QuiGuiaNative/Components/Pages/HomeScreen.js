import React from "react";
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity,ScrollView} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 30

const HomeScreen = () => {
  return (
    //---------------- PARTE DE CIMA COM A LOGO DO QUIGUIA
    <View style={[styles.container]}>
      <View style={{ flex: 1, backgroundColor: "red" }}>
          <View style={{ backgroundColor: "#7614B1", flex: 1 }}>
            <View style={styles.imgQui}>
              <Image source={require('../Imagens/QuiguiaLogo.png')}/>
              <TouchableOpacity>
                <Fontisto name="bell-alt" size={30} color="white" style={{marginRight:16}}/>
              </TouchableOpacity>
            </View>
  
      </View>
      </View>




      <View style={{ flex: 10}}>
        <ScrollView>
         

          <View style={{width:'100%',height:220,backgroundColor:'yellow'}}></View>
          
           
          <View style={{width:'100%',height:150,backgroundColor:'blue'}}>
            <View>
              <View style={{backgroundColor:'red'}}>
                <Text style={{fontSize:25,fontWeight:'bold',margin:3}}>O que procura? <AntDesign name="heart" size={24} color="black" /></Text>
                
              </View>
              <View style={{backgroundColor:'pink',height:'75%'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={styles.botaoprocura}>
                    <TouchableOpacity>
                    <Ionicons name="school" size={50} color="white" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.botaoprocura}>
                    <TouchableOpacity>
                    <MaterialCommunityIcons name="account-cash" size={50} color="white" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.botaoprocura}>
                    <TouchableOpacity>
                    <Ionicons name="ios-fast-food" size={50} color="white" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.botaoprocura}>
                    <TouchableOpacity>
                      <Entypo name="home" size={50} color="white" />  
                    </TouchableOpacity>
                  </View>

                  <View style={styles.botaoprocura}>
                    <TouchableOpacity>
                      <FontAwesome name="map-marker" size={50} color="white" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.botaoprocura}>
                    <TouchableOpacity>
                      <AntDesign name="smile-circle" size={50} color="white" />
                    </TouchableOpacity>
                  </View>

                </ScrollView>
              </View>
            </View>
            
            

          </View>
          
          <View style={{width:'100%',height:150,backgroundColor:'orange'}}></View>
          <View style={{width:'100%',height:220,backgroundColor:'purple'}}></View>
          <View style={{width:'100%',height:200,backgroundColor:'gray'}}></View>
        </ScrollView>
        

      </View>
      <View style={styles.footerHome}>
        <View style={styles.containericons}>
          <TouchableOpacity>
            <Entypo name="home" size={40} color="#7800b4" />  
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="star" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Foundation name="magnifying-glass" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="user-circle" size={40} color="black" />
          </TouchableOpacity>


        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
  },
  containericons:{
    flexDirection:'row',
    alignItems:'center',
    margin:12,
    marginRight:20,
    marginLeft:20,
    justifyContent:'space-between',
    backgroundColor:'white',

  },
  imgQui:{
    height:'100%',
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'

    
  },
  footerHome:{
    flex: 1, 
    width:'100%',
    backgroundColor:'white',
    elevation:4,
    
  },
  botaofundo:{
    backgroundColor:'purple',
    width:100,
    height:'70%',
    alignItems:'center',
    justifyContent:'center'
  
  },
  procura:{

    
    
    backgroundColor:'green',

  },
  botaoprocura:{
    height:'80%',
    width:100,
    backgroundColor:'#7800b4',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    margin:4,
  }
}); 

export default HomeScreen;

