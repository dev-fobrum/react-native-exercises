import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

import style from './estilo'

const DigiteSeuNome = (props) => {
    const [nome, setNome] = useState('Teste')

    return (
        <View>
            <Text style={style.txtG}>{nome}</Text>
            <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={(e) => setNome(e)}
            />
        </View>
    )
}

export default DigiteSeuNome