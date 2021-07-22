import React from 'react';
import { FontAwesome5 } from  'react-native-vector-icons/FontAwesome';

import { Home } from './Pages/Home'; 

import { Pagina1 } from './Pages/Pagina1';
import { Pagina2 } from './Pages/Pagina2';

import { Pagina3 } from './Pages/Pagina3';
import { Pagina4 } from './Pages/Pagina4';



import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tabs = createBottomTabNavigator();

const TecnicoStack = createStackNavigator();
const SuperiorStack = createStackNavigator();

/**
 * Here stack for tabTecnico
 * 
 */

function parte1StackScreen() {
  return(
    <TecnicoStack.Navigator>
      <TecnicoStack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <TecnicoStack.Screen name="Pagina1" component={Pagina1} />
      <TecnicoStack.Screen name="Pagina2" component={Pagina2} />
    </TecnicoStack.Navigator>
  )
}

/**
 * Here stack for tabSuperior 
 * @returns 
 */
 function parte2StackScreen() {
  return(
    <SuperiorStack.Navigator>
      <SuperiorStack.Screen name="Pagina3" component={Pagina3} options={{headerShown:false}}  />
      <SuperiorStack.Screen name="Pagina4" component={Pagina4} />
    </SuperiorStack.Navigator>
  )
}

export  function Routes() {
  return (
      <Tabs.Navigator 
        tabBarOptions={{
        labelPosition: 'beside-icon',
        activeTintColor: '#C72828',
        labelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
        inactiveTintColor: '#B7B7CC',
      }}
      >
          <Tabs.Screen name="tecnico" 
            options={{
              tabBarIcon: ({ color }) => <FontAwesome5 name="school" size={24} color="black" /> ,
              title: 'Parte 1',
            }}
          component={parte1StackScreen}/>

          <Tabs.Screen name="superior" 
             options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="user-graduate" size={24} color="black" />
              ),
              title: 'Parte 2',
            }}
          component={parte2StackScreen}/>
      </Tabs.Navigator>
  );
}