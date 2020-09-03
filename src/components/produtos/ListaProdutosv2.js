import React from 'react'
import { View, Text, FlatList } from 'react-native'

import produtos from './produtos'

import style from '../estilo'

const ListaProdutosv2 = (props) => {
    const produtoRender = ({ item: p }) => {
        return <Text key={p.id}>{p.id} - {p.nome} por R${p.preco}</Text>
    }

    return (
        <View>
            <Text style={style.txtG}>
                Lista de Produtos
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </View>
    )
}

export default ListaProdutosv2