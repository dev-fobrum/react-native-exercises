import React from 'react'
import { Button } from 'react-native'

const Filho = (props) => {

    function gerarNumero(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }

    return (
        <Button
            title="Executar!"
            onPress={function () {
                const n = gerarNumero(props.min, props.max)
                props.function(n)
            }}
        />
    )
}

export default Filho