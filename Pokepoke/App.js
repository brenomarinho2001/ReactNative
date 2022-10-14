import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import Header from './Components/Header';
import Body from './Components/Body';

export default function App() {
  return (
    <View style={styles.bodysheet}>
        <Header/>
        <Body/>
    </View>
  );
}


const styles = StyleSheet.create({
  bodysheet:{
    flex:1,


  }
})
