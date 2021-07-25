import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import IconSchol from 'react-native-vector-icons/MaterialIcons';
import GlobalStyles from '../styles/GlobalStyles';
const Tab = createBottomTabNavigator();


export function Pagina1() {

    return (
        <View style={GlobalStyles.screenContainer}>
            <Image style={GlobalStyles.image1} source={require('../imgs/ghj.jpg')} />
            <Text style={GlobalStyles.text}>
                Atende com suas atividades acadêmicas em torno de
                30 municípios diferentes, incluindo alguns dos vizinhos
                estados do Ceará e Paraíba.  A economia da região concentra-se nas
                atividades comerciais e de serviços de apoio urbano, com potencial
                para desenvolvimento do turismo e de arranjos produtivos locais nas
                áreas de beneficiamento de leite e mel, industrialização da carne,
                alimentação e hospedagem, construção civil, confecções e comércio varejista.
            </Text>

            <Text style={GlobalStyles.text2}>
                - Horário de atendimento: 9h às 12h e 14h às 18h (segunda a sexta-feira)
            </Text>
            <Text style={GlobalStyles.text2}>
                - E-mail: comunicacao.pf@ifrn.edu.br
            </Text>
            <Text style={GlobalStyles.text2}>
                - Telefone:(84) 4005 4109
            </Text>
            <Text style={GlobalStyles.text2}>
               - Localização:
                Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte 
            </Text>
            <Text style={GlobalStyles.text2}>
            | Pau dos Ferros
                BR 405, KM 154, S/N, Bairro Chico Cajá, Pau dos Ferros/RN, CEP 59900-000, CNPJ: 10.877.412/0006-72 Coordenação de Comunicação Social e Eventos (COCSEV)
            </Text>

        </View>
    )
}