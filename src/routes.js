import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './Pages/Home';
import { Pagina1 } from './Pages/Pagina1';
import { Pagina2 } from './Pages/Pagina2';

import { Tecnico } from './Pages/Tecnico';
import { Apicultura } from './Pages/Apicultura';
import { Alimentos } from './Pages/Alimentos';
import { Informatica } from './Pages/Informatica';

import { Superior } from './Pages/Superior';
import { Ads } from './Pages/Ads';
import { Quimica } from './Pages/Quimica';

import { PosGraduacao } from './Pages/PosGraduacao';
import { Cnaturais } from './Pages/Cnaturais';



//
// o nome atribuido será usado  para navegar entre as as telas,
// será inserido em  onPress={() => navigation.navigate('nomedatela)

const Stack = createStackNavigator();

export function Routes() {
  //definir as rotas
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Pagina1" component={Pagina1} options={{ title: 'Apresentação IFRN', headerTitleAlign: 'center' }} />
      <Stack.Screen name="Pagina2" component={Pagina2} options={{ title: 'Cursos Disponíveis', headerTitleAlign: 'center' }} />
      <Stack.Screen name="Tecnico" component={Tecnico} options={{ title: 'Cursos Técnicos', headerTitleAlign: 'center' }}/>
      <Stack.Screen name="Apicultura" component={Apicultura} options={{ title: 'Curso de Apicultura', headerTitleAlign: 'center' }}/>
      <Stack.Screen name="Alimentos" component={Alimentos} options={{ title: 'Curso de Alimentos', headerTitleAlign: 'center' }}/>
      <Stack.Screen name="Informatica" component={Informatica} options={{ title: 'Curso de Informática', headerTitleAlign: 'center' }}/>
      <Stack.Screen name="Superior" component={Superior} options={{ title: 'Cursos Superior', headerTitleAlign: 'center' }}/>
      <Stack.Screen name="Ads" component={Ads} options={{ title: 'Graduação de ADS', headerTitleAlign: 'center'}}/>
      <Stack.Screen name="Quimica" component={Quimica} options={{ title: 'Graduação em Química', headerTitleAlign: 'center' }}/>
      <Stack.Screen name="PosGraduacao" component={PosGraduacao} options={{ title: 'Pós-Graduação', headerTitleAlign: 'center' }}/>
      <Stack.Screen name="Cnaturais" component={Cnaturais} options={{ title: 'Especialização em Ensino de Ciências Naturais e Matemática', headerTitleAlign: 'center' }}/>
    </Stack.Navigator>
  );
}