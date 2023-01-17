import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, TextInput, TouchableOpacity} from 'react-native';

import { useState } from 'react';
import Pickerc from './Components/Pickerc';
import Sliderc from './Components/Slidesc';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';





export default function App() {

  const [status,setStatus] = useState(false)

  const [nome,setNome] = useState('')

  const [idade,setIdade] = useState(0)

  const [sexo,setSexo] = useState([
    {sexonome:'Masculino',value:0},
    {sexonome:'Feminino',value:1}
  ])
  
  const [sexoSelecionado,setSexoSelecionado] = useState(0)

  const [valorInicial,setValorInicial] = useState(1000)


  function mostrar(){

    if(nome === '' || idade === ''){
      alert('Preencha todos os dados corretamente')
      return
    }
    else{
      alert(
        'PARABÉNS! VOCÊ CONSEGUIU SE CADASTRAR: \n\n' +
        'Nome: ' + nome + '\n' +
        'Idade:' + idade + '\n' +
        'Sexo: ' + sexo[sexoSelecionado].sexonome + '\n' +
        'Valor Inicial da Conta: ' + valorInicial.toFixed(0) + '\n' +
        'Conta estudante: ' + (status ? 'Sim!' : 'Não')
  
  
  
  
      )
      }
    }
    


  return (
    <View style={styles.container}>

      <Text style={{marginBottom:35,fontSize:30}}>Cadastro no Banco:</Text>
      
      <Text>Nome:</Text>
      <TextInput placeholder='escreva seu nome' style={{width:300,height:40,borderWidth:1,borderRadius:5,margin:10,padding:10}} onChangeText={(n) => setNome(n)}></TextInput>
      
      <Text>Idade:</Text>
      <TextInput placeholder='escreva sua idade' style={{width:300,height:40,borderWidth:1,borderRadius:5,padding:10}} onChangeText={(i) => setIdade(i)}></TextInput>


      <Picker style={{width:300,marginTop:30}} selectedValue={sexoSelecionado} onValueChange={setSexoSelecionado} >
        <Picker.Item key={0} value={0} label="Masculino"></Picker.Item>
        <Picker.Item key={1} value={1} label="Feminino"></Picker.Item>
      </Picker>

      <Text style={{marginTop:30}}>Valor inicial da Conta:</Text>
      <Slider minimumValue={250} maximumValue={2000} style={{width:300}} value={valorInicial} onValueChange={(valores) => setValorInicial(valores)}>

      </Slider>
      <Text>Valor Inicial: {valorInicial.toFixed(0)},00 reais</Text>

      <Text style={{marginTop:30}}>Você é Estudante:</Text>

      <Switch 
      value={status} 
      onValueChange={(valor) => setStatus(valor)}
      ></Switch>

      <TouchableOpacity style={{width:300,height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#CDCDCD',borderRadius:15}} onPress={mostrar}><Text>Cadastrar</Text></TouchableOpacity>
      
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
