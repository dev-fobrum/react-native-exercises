import React from 'react'
import { Text, View } from 'react-native'

import style from './estilo'

const ParImpar = ({ num = 0 }) => {
    return (
        <View>
            <Text style={style.txtG}>O resultado é:</Text>
            <Text style={style.txtG}>{num % 2 === 0 ? 'Par' : 'Ímpar'}</Text>
        </View>
    )
}

export default ParImpar