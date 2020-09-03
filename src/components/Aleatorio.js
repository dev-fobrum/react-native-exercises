import React from 'react'
import { Text } from 'react-native'

import style from './estilo'

const Aleatorio = ({ max, min }) => {
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min

    return (
        <Text style={style.txtG}>
            {aleatorio}
        </Text>
    )
}

export default Aleatorio