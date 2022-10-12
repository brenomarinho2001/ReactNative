import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './Components/Header/Index'
import Balance from './Components/Header/Balance/Index';
import Moviments from './Components/Header/Moviments';
import Actions from './Components/Header/Actions';


const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2018',
    type: 0, // DESPESAS 
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '500,30',
    date: '30/03/2020',
    type: 1, // RECEITA
  },
  {
    id: 3,
    label: 'Salário',
    value: '5300,90',
    date: '01/09/2021',
    type: 1, // RECEITA
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Breno O.Marinho'/>
      <Balance saldo={"500.000"} gastos={"-527,00"} />

      <Actions/>
      <Text style={styles.title}>Últimas Movimentações:</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={( {item} )=> <Moviments data={item}></Moviments> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
 
