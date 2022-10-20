

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from './Components/Pages/InitialScreen';
import Routes from './Components/Pages/Routes';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Routes/>
  );
}


