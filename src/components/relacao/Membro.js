import React from 'react'
import { Text } from 'react-native'

import style from '../estilo'

const Membro = (props) => {
    return (
        <>
            <Text style={style.txtG}>
                {props.nome} {props.sobrenome}
            </Text>
        </>
    )
}

export default Membro