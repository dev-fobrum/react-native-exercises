import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

const FlexBoxv3 = (props) => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor="#CBA" lado={20} />
            <Quadrado cor="#F00" lado={30} />
            <Quadrado cor="#0FF" lado={40} />
            <Quadrado cor="#FF0" lado={50} />
            <Quadrado cor="#ABC" lado={60} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        height: 350,
        width: '100%',
        justifyContent: "space-evenly",
        alignItems: 'center',
        backgroundColor: '#000'
    }
})

export default FlexBoxv3