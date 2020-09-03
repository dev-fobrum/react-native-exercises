import React from 'react'
import { Text, Platform } from 'react-native'

import style from './estilo'

const Diferenciar = () => {
    if (Platform.OS === 'android') {
        return <Text style={style.txtG}>Android</Text>
    } else if (Platform.OS === 'ios') {
        return <Text style={style.txtG}>iOS</Text>
    } else {
        return <Text style={style.txtG}>{Platform.OS}</Text>
    }
}

export default Diferenciar