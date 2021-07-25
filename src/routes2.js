import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Home } from './Pages/Home';

import { Pagina1 } from './Pages/Pagina1';
import { Pagina2 } from './Pages/Pagina2';

import { Pagina3 } from './Pages/Pagina3';
import { Pagina4 } from './Pages/Pagina4';

import { Tecnico } from './Pages/Tecnico';
import { Apicultura } from './Pages/Apicultura';
import { Alimentos } from './Pages/Alimentos';
import { Informatica } from './Pages/Informatica';

import { Superior } from './Pages/Superior';
import { Ads } from './Pages/Ads';
import { Quimica } from './Pages/Quimica';

import { PosGraduacao } from './Pages/PosGraduacao';
import { Cnaturais } from './Pages/Cnaturais';


import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tabs = createBottomTabNavigator();

const TecnicoStack = createStackNavigator();
const SuperiorStack = createStackNavigator();
const SobreStack = createStackNavigator();
const HomeStack = createStackNavigator();

/**
 * Here stack for tabTecnico
 * 
 */

function parte1StackScreen() {
  return (
    <TecnicoStack.Navigator>
      <TecnicoStack.Screen name="Tecnico" component={Tecnico} options={{ title: 'Cursos Técnicos', headerTitleAlign: 'center' }} />
      <TecnicoStack.Screen name="Apicultura" component={Apicultura} options={{ title: 'Curso de Apicultura', headerTitleAlign: 'center' }} />
      <TecnicoStack.Screen name="Alimentos" component={Alimentos} options={{ title: 'Curso de Alimentos', headerTitleAlign: 'center' }}/>
      <TecnicoStack.Screen name="Informatica" component={Informatica} options={{ title: 'Curso de Informática', headerTitleAlign: 'center' }}/>
    </TecnicoStack.Navigator>
  )
}

/**
 * Here stack for tabSuperior 
 * @returns 
 */
function parte2StackScreen() {
  return (
    <SuperiorStack.Navigator>
      <SuperiorStack.Screen name="Superior" component={Superior} options={{ title: 'Cursos Superior', headerTitleAlign: 'center' }} />
      <SuperiorStack.Screen name="Ads" component={Ads} options={{ title: 'Graduação de ADS', headerTitleAlign: 'center' }}/>
      <SuperiorStack.Screen name="Quimica" component={Quimica} options={{ title: 'Graduação em Química', headerTitleAlign: 'center' }} />
    </SuperiorStack.Navigator>
  )
}

function parte3StackScreen() {
  return (
    <SobreStack.Navigator>
      <SobreStack.Screen name="Pagina1" component={Pagina1} options={{ title: 'Sobre o IFRN', headerTitleAlign: 'center' }}  />
    </SobreStack.Navigator>
  )
}

function parte4StackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <HomeStack.Screen name="Pagina1" component={Pagina1} options={{ title: 'Sobre o IFRN', headerTitleAlign: 'center' }} />
      <HomeStack.Screen name="Pagina2" component={Pagina2} options={{ title: 'Cursos Disponíveis', headerTitleAlign: 'center' }}/> 
      <TecnicoStack.Screen name="Tecnico" component={Tecnico} options={{ title: 'Cursos Técnicos', headerTitleAlign: 'center' }}/>
      <TecnicoStack.Screen name="Apicultura" component={Apicultura} options={{ title: 'Curso de Apicultura', headerTitleAlign: 'center' }}/>
      <TecnicoStack.Screen name="Alimentos" component={Alimentos} options={{ title: 'Curso de Alimentos', headerTitleAlign: 'center' }}/>
      <TecnicoStack.Screen name="Informatica" component={Informatica} options={{ title: 'Curso de Informática', headerTitleAlign: 'center' }}/>
      <SuperiorStack.Screen name="Superior" component={Superior} options={{ title: 'Cursos Superior', headerTitleAlign: 'center' }}/>
      <SuperiorStack.Screen name="Ads" component={Ads} options={{ title: 'Graduação de ADS', headerTitleAlign: 'center' }}/>
      <SuperiorStack.Screen name="Quimica" component={Quimica} options={{ title: 'Graduação em Química', headerTitleAlign: 'center' }}/>
    </HomeStack.Navigator>
  )
}



export function Routes() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        labelPosition: 'beside-icon',
        activeTintColor: '#808080',
        labelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
        inactiveTintColor: '#2E8B57',
      }}
    >
      <Tabs.Screen name="home"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color="#2E8B57" />,
          title: 'Home',
        }}
        component={parte4StackScreen} />
      <Tabs.Screen name="tecnico"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="school" size={24} color="#2E8B57" />,
          title: 'Tecnico',
        }}
        component={parte1StackScreen} />

      <Tabs.Screen name="superior"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-graduate" size={24} color="#2E8B57" />,
          title: 'Superior',
        }}
        component={parte2StackScreen} />
      <Tabs.Screen name="sobre"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="info-circle" size={24} color="#2E8B57" />,
          title: 'Sobre',
        }}
        component={parte3StackScreen} />
      
    </Tabs.Navigator>
  );
}