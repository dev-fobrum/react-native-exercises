import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

const FlexBoxv1 = (props) => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor="#CBA" />
            <Quadrado cor="#F00" />
            <Quadrado cor="#0FF" />
            <Quadrado cor="#FF0" />
            <Quadrado cor="#ABC" />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000'
    }
})

export default FlexBoxv1