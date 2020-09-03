import React from 'react'
import { Text } from 'react-native'

import style from './estilo'

const Comp1 = () => {
    return <Text style={style.txtG}>Comp #01</Text>
}

const Comp2 = () => {
    return <Text style={style.txtG}>Comp #02</Text>
}

const Comp3 = () => {
    return <Text style={style.txtG}>Comp #03</Text>
}

export default Comp1
export { Comp2, Comp3 }