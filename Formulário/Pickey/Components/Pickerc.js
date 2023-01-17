import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

export default function Pickerc() {
  
  const [produtoSelecionado,setProdutoSelecionado] = useState(0)
  const [produtos,setProdutos] = useState([
    {key:1,nome:'Lapis',preco:2.5},
    {key:2,nome:'Borracha',preco:3.0},
    {key:3,nome:'Caderno',preco:15.5},
  ])


  let prodts = produtos.map((value,key) => {
    return <Picker.Item key={key} value={key} label={value.nome}/>
  })

  return (
    <View style={styles.container}>
      
      <Picker 
        selectedValue={produtoSelecionado}
        onValueChange={(itemValue,itemIndex) => setProdutoSelecionado(itemValue)}
        style={{width:200}}
      >
        {prodts}
      
      </Picker>
      <Text>Preço:{produtos[produtoSelecionado].preco}</Text>
      
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
