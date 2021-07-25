import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import { MainButton } from '../components/MainButton'; 

export function Pagina2({ navigation} ){
    return(
        <View style={GlobalStyles.screenContainer}>
            <MainButton title="Tecnico Integrado" onPress={() => navigation.navigate('Tecnico')} />
            <MainButton title="Graduação " onPress={() => navigation.navigate('Superior')} />
            <MainButton title="Pós-Graduação " onPress={() => navigation.navigate('PosGraduacao')} />
         </View>
    )
}