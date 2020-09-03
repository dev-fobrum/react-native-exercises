import React from 'react'
import { View, Text } from 'react-native'

import produtos from './produtos'

import style from '../estilo'

const ListaProdutos = (props) => {
    function lista() {
        return produtos.map(p => {
            return <Text key={p.id}>{p.id} - {p.nome} por R${p.preco}</Text>
        })
    }

    return (
        <View>
            <Text style={style.txtG}>
                Lista de Produtos
            </Text>
            {lista()}
        </View>
    )
}

export default ListaProdutos