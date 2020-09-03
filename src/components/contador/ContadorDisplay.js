import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import style from '../estilo'

const ContadorDisplay = (props) => {
    return (
        <SafeAreaView style={selfStyle.Display}>
            <Text style={[style.txtG, selfStyle.DisplayText]}>
                {props.num}
            </Text>
        </SafeAreaView>
    )
}

const selfStyle = StyleSheet.create({
    Display: {
        width: '100%',
        backgroundColor: '#000'
    },
    DisplayText: {
        color: '#FFF'
    }
})

export default ContadorDisplay