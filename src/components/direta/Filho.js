import React from 'react'
import { Text } from 'react-native'

import style from '../estilo'

const Filho = (props) => {
    return (
        <>
            <Text style={style.txtG}>{props.a}</Text>
            <Text style={style.txtG}>{props.b}</Text>
        </>
    )
}

export default Filho