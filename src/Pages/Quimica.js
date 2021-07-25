import React from 'react'
import { View, Text, Image } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';

export function Quimica() {
    return (
        <View style={GlobalStyles.screenContainer}>

            <Text style={GlobalStyles.title1}>
                Curso Superior de Licenciatura em Química
            </Text>

            <Text style={GlobalStyles.text}>
                O Curso Superior de Licenciatura em Química forma profissionais
                que são habilitados ao exercício do magistério na educação básica.
                Pode atuar na área de análises químicas e controle de qualidade,
                quer no desenvolvimento de novos métodos analíticos, quer na operação
                de equipamentos. Pode também se dedicar à pesquisa acadêmica, que visa
                a geração de novos conhecimentos, materiais didáticos e metodologias.

            </Text>
            <Text style={GlobalStyles.text2}>
                - Carga Horária do curso: 3.404 horas
            </Text>
            <Text style={GlobalStyles.text2}>
                - Duração do curso: 4 anos
            </Text>
            <Text style={GlobalStyles.text2}>
            - Resolução de criação do curso: Resolução Nº 08/2012-CONSUP/IFRN, de 01/03/2012.
            </Text>
        </View >
    )
}