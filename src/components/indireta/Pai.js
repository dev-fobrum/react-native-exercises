import React, { useState } from 'react'
import { Text } from 'react-native'

import Filho from './Filho'

import style from '../estilo'

const Pai = () => {
    const [numero, setNumero] = useState(0)

    function exibirValor(n) {
        setNumero(n)
    }

    return (
        <>
            <Text style={style.txtG}>{numero}</Text>
            <Filho
                min={1}
                max={60}
                function={exibirValor}
            />
        </>
    )
}

export default Pai