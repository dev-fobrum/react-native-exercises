import React from 'react'
import { Button, SafeAreaView, StyleSheet } from 'react-native'

import style from '../estilo'

const ContadorBotoes = (props) => {
    return (
        <SafeAreaView style={selfStyle.Botoes}>
            <Button
                title="+"
                onPress={props.inc}
            />
            <Button
                title="-"
                onPress={props.dec}
            />
        </SafeAreaView>
    )
}

const selfStyle = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})

export default ContadorBotoes