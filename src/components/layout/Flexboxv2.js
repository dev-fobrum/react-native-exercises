import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

const FlexBoxv2 = (props) => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor="#CBA" />
            <Quadrado cor="#F00" />
            <Quadrado cor="#0FF" />
            <Quadrado cor="#FF0" />
            <Quadrado cor="#ABC" />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#000'
    }
})

export default FlexBoxv2