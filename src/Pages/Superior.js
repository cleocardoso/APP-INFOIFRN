import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import { MainButton } from '../components/MainButton'; 

export function Superior({ navigation} ){
    return(
        <View style={GlobalStyles.screenContainer}>
            <MainButton title="ADS" onPress={() => navigation.navigate('Ads')} />
            <MainButton title="Quimica" onPress={() => navigation.navigate('Quimica')} />
           
         </View>
    )
}