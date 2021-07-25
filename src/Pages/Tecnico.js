import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import { MainButton } from '../components/MainButton'; 

export function Tecnico({ navigation} ){
    return(
        <View style={GlobalStyles.screenContainer}>
            <MainButton title="Apicultura" onPress={() => navigation.navigate('Apicultura')} />
            <MainButton title="Alimentos" onPress={() => navigation.navigate('Alimentos')} />
            <MainButton title="Informática" onPress={() => navigation.navigate('Informatica')} />
         </View>
    )
}