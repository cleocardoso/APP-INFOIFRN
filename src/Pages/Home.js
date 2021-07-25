import React from 'react'
import { View, Text, Image } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import { MainButton } from '../components/MainButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
const Tab = createBottomTabNavigator();

function Inicio({ navigation }) { 
    return (
        <View style={GlobalStyles.screenContainer}>
            <Image style={GlobalStyles.image} source={require('../imgs/IF.png')} />
            <Text style={GlobalStyles.title}>

                IFRN - Pau dos Ferros
            </Text>
            <MainButton title="IFRN" onPress={() => navigation.navigate('Pagina1')} />
            <MainButton title="Cursos" onPress={() => navigation.navigate('Pagina2')}  />
            
        </View>
    )
    
}
export function Home({ navigation }) {
    return (
        <> 
            <Inicio navigation={navigation} />
        </>
    )
}