import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Verde from './src/pages/verde';
import Azul from './src/pages/azul';
import Home from './src/pages/home';
import Lista from './src/pages/lista';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Verde" component={Verde}/>
        <Stack.Screen name="Azul" component={Azul}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Lista" component={Lista}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}