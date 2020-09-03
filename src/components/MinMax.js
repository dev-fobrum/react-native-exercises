import React from 'react'
import { Text } from 'react-native'

import style from './estilo'

const MinMax = ({ max, min }) => {
    return (
        <Text style={style.txtG}>
            O valor de {max} é maior que {min}
        </Text>
    )
}

export default MinMax