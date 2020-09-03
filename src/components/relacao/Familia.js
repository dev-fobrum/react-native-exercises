import React from 'react'
import { View, Text } from 'react-native'

import style from '../estilo'

const Familia = (props) => {
    return (
        <View>
            <Text style={style.txtG}>Membros da Família</Text>
            {props.children}
        </View>
    )
}

export default Familia