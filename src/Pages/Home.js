import React from 'react'
import {View,Text,Image} from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import { MainButton } from '../components/MainButton'; 
export function Home( { navigation} ){
    
    return(
        <View style={GlobalStyles.screenContainer}>
            <Image style={ GlobalStyles.image } source={require('../imgs/IF.png')} />
            <Text style={GlobalStyles.title}>
             
                IFRN - Pau dos Ferros
            </Text>
            <MainButton title="Página 1" onPress={() => navigation.navigate('Pagina1')} />
            <MainButton title="Página 2" onPress={() => navigation.navigate('Pagina2')} />

        </View>
    )
}