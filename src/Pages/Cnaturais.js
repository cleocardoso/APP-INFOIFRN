import React from 'react'
import { View, Text, Image } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';

export function Cnaturais() {
    return (
        <View style={GlobalStyles.screenContainer}>
            <Text></Text>
            <Text style={GlobalStyles.title1}>
                Curso de especialização em Ensino de Ciências Naturais e Matemática
            </Text>

            <Text style={GlobalStyles.text}>
                Sobre o Curso:
            </Text>
            <Text style={GlobalStyles.text}>
                O curso de especialização em Ensino de Ciências Naturais e Matemática
                têm como objetivo capacitar professores das áreas de Física, Química,
                Biologia e Matemática, com base em saberes específicos, curriculares e
                experiências, visando contribuir para um desenvolvimento qualificado
                da educação básica do estado do Rio Grande do Norte e do país.


            </Text>
            <Text style={GlobalStyles.text2}>
                - Carga horária: 400h;
            </Text>
            <Text style={GlobalStyles.text2}>
                - Duração: 18 meses;
            </Text>

            <Text style={GlobalStyles.text2}>
                - Resolução de criação: Resolução Nº 02/2015-CONSUP/IFRN, de 27/02/2015;
            </Text>

            <Text style={GlobalStyles.text2}>
                - Coordenador: Professor Raimundo Fábio da Silva
            </Text>

            <Text style={GlobalStyles.text2}>
                - E-mail da Coordenação: eecnm.pf@ifrn.edu.br
            </Text>


        </View>
    )
}