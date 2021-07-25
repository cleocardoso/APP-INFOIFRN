import React from 'react'
import { View, Text, Image } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';

export function Ads() {
    return (
        <View style={GlobalStyles.screenContainer}>
            <Text></Text>
            <Text style={GlobalStyles.title1}>
                ADS - Análise e Desenvovimento de Sistema
            </Text>

            <Text style={GlobalStyles.text}>
                Sobre o Curso:
            </Text>
            <Text style={GlobalStyles.text}>
                O Curso de Tecnólogo em Análise e Desenvolvimento de Sistemas
                forma profissionais que  analisam, projetam, documentam, especificam,
                testam, implantam e mantém sistemas computacionais de informação.
                Este profissional trabalha, também, com ferramentas computacionais,
                equipamentos de informática e metodologia de projetos na produção de sistemas.
                Raciocínio lógico, emprego de linguagens de programação e de metodologias de
                construção de projetos, preocupação com a qualidade, usabilidade, robustez,
                integridade e segurança de programas computacionais são fundamentais
                à atuação deste profissional.
            </Text>
            <Text style={GlobalStyles.text2}>
                - Carga Horária do curso:2.594 horas
            </Text>
            <Text style={GlobalStyles.text2}>
                - Duração do curso: 3 anos
            </Text>

            <Text style={GlobalStyles.text2}>
                - Resolução de criação do curso:
                Resolução Nº 17/2012-CONSUP/IFRN, de 01/03/2012
            </Text>
        </View>
    )
}