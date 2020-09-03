import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import style from '../estilo'

const MegaNumero = ({ num }) => {
    const lastDigit = num.toString().split('').pop()
    const colors = [
        '#FFF',
        '#F00',
        '#F00',
        '#0F0',
        '#964b00',
        '#00F',
        '#993F6C',
        '#000',
        '#C3C3C3',
        '#EE9A00',
    ]

    return (
        <View style={[selfStyle.Container, { backgroundColor: colors[lastDigit] }]}>
            <Text style={[style.txtG, { color: +lastDigit === 0 ? '#000' : '#FFF' }]}>
                {num}
            </Text>
        </View>
    )
}

const selfStyle = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        margin: 5,
        padding: 3,
        borderRadius: 25
    }
})

export default MegaNumero