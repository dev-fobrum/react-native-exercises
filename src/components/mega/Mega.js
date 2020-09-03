import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import MegaNumero from './MegaNumero'

import style from '../estilo'

export default class Mega extends Component {
    state = {
        qntNumeros: this.props.qntNumeros,
        numeros: []
    }

    alterarQuantidadeNumeros = (qtde) => {
        this.setState({ qntNumeros: +qtde })
    }

    gerarNumeroNaoContido = (nums) => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qntNumeros)
            .fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a - b)

        this.setState({ numeros })
    }

    // gerarNumerosAlt = () => {
    //     const { qntNumeros } = this.state
    //     const numeros = []

    //     for (let i = 0; i < qntNumeros; i++) {
    //         numeros.push(this.gerarNumeroNaoContido(numeros))
    //     }

    //     numeros.sort((a, b) => a - b)

    //     this.setState({ numeros })
    // }

    exibirNumeros = () => {
        const nums = this.state.numeros

        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={style.txtG}>
                    Gerador da Mega-Sena
                </Text>

                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1, marginBottom: 10 }}
                    placeholder="Quantidade de números"
                    value={`${this.state.qntNumeros}`}
                    onChangeText={this.alterarQuantidadeNumeros}
                />

                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />

                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}