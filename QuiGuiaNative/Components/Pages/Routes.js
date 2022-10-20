import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet} from 'react-native';
import HomeScreen from './HomeScreen';
//------------------------------
import InitialScreen from './InitialScreen';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator InitialScreen={'Inital'}>
            <Stack.Group>
            
            <Stack.Screen name="Initial" component={InitialScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            
            </Stack.Group>
            
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
