import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

const FlexBoxv3 = (props) => {
    return (
        <View style={style.FlexV4}>
            <View style={style.v0} />
            <View style={style.v1} />
            <View style={style.v2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    v0: {
        backgroundColor: '#F00',
        height: 300
    },
    v1: {
        flexGrow: 5,
        backgroundColor: '#0F0'
    },
    v2: {
        flexGrow: 1,
        backgroundColor: '#00F'
    }
})

export default FlexBoxv3