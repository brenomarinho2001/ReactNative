import React from "react";

import { View,StyleSheet, Text, StatusBar, TouchableOpacity} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import {MaterialIcons} from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight: 64

export default function Header() {
    return(
        <View style={styles.containerHeader}>
            <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="bars" size={30} style={styles.itemleft}/>
            </TouchableOpacity>
            <Text style={styles.Title}>Pokédex</Text>
            </View>
            
            <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="star" size={30} style={styles.itemright}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon name="check" size={30} style={styles.itemright}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon name="ellipsis-v" size={30} style={styles.itemright}></Icon>
            </TouchableOpacity>

            </View>
            
            
        </View>       
    )
}


const styles = StyleSheet.create(
    {   
        containerHeader:{
       
        paddingTop: statusBarHeight,
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-between',

        backgroundColor:'red',
        textAlign:'center',
        },
        container:{
        margin:25,
        flexDirection:'row'
        
        },
        Title:{
            fontSize: 25,
            color: 'white'
        },
        itemleft:{
        marginRight:20,
        color: 'white'
        },
        itemright:{
        marginLeft:20,
        color: 'white'
        }
    }
)