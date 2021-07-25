import React from 'react'
import { View, Text, Image } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';

export function Informatica() {
    return (
        <View style={GlobalStyles.screenContainer}>
            <Text style={GlobalStyles.title1}>
                Curso Técnico Integrado em Informática
            </Text>
            <Text style={GlobalStyles.text}>
                Desenvolve programas de computador, seguindo as especificações
                e paradigmas da lógica de programação e das linguagens de programação.
                Utiliza ambientes de desenvolvimentos de sistemas, sistemas
                operacionais e banco de dados. Realiza testes de software,
                mantendo registro que possibilitem análises e refinamento dos
                resultados. Executa manutenção de programas de computadores
                implantados. Possibilidades de atuação: Instituições públicas,
                privadas e do terceiro setor que demandem sistemas computacionais,
                especialmente envolvendo programação de computadores
            </Text>
            <Text style={GlobalStyles.text2}>
                - Modalidade: Presencial.
            </Text>
            <Text style={GlobalStyles.text2}>
                - Carga horária do curso: 3880h.
            </Text>
            <Text style={GlobalStyles.text2}>
                - Duracão do curso: 4 anos.
            </Text>
            <Text style={GlobalStyles.text2}>
                - Resolucão de criacão do curso: Resolução Nº 13/2009-CONSUP/IFRN, de 22/05/2009.
            </Text>
        </View>
    )
}