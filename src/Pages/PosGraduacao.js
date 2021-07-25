import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import { MainButton } from '../components/MainButton'; 

export function PosGraduacao({ navigation} ){
    return(
        <View style={GlobalStyles.screenContainer}>
            <MainButton title="Especialização em Ensino de Ciências Naturais e Matemática" onPress={() => navigation.navigate('Cnaturais')} />
         </View>
    )
}