
import React from "react"
import { View,Text,StyleSheet,TouchableOpacity, FlatList, Image} from "react-native"


export default function Poke({id,nome}) {
    return(
        <TouchableOpacity style={styles.box}>
            <Text style={styles.textpoke}>#{nome}</Text>

        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    box:{
        height:100,
        borderBottomWidth:1,
        borderBottomColor:'#CACACA',
        borderRadius: 9,
        margin: 10,
        justifyContent:'center',   
        alignItems:'center',
    },
    textpoke:{
        color:'black',
        fontWeight:'bold',

    }
})

