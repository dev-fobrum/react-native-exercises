import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro'
import CompPadrao, { Comp2, Comp3 } from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'

import Pai from './components/direta/Pai'
import Pai2 from './components/indireta/Pai'

import Contadorv2 from './components/contador/Contadorv2'

import Diferenciar from './components/Diferenciar'

import ParImpar from './components/ParImpar'

import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'

import UsuarioLogado from './components/UsuarioLogado'

import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosv2 from './components/produtos/ListaProdutosv2'

import DigiteSeuNome from './components/DigiteSeuNome'

import Flexboxv1 from './components/layout/Flexboxv1'
import Flexboxv2 from './components/layout/Flexboxv2'
import Flexboxv3 from './components/layout/Flexboxv3'
import Flexboxv4 from './components/layout/Flexboxv4'

import Mega from './components/mega/Mega'

const App = () => {
    return (
        <SafeAreaView style={style.App}>
            <Mega
                qntNumeros={7}
            />

            {/*<Flexboxv4 />
            <Flexboxv3 />
            <Flexboxv2 />
            <Flexboxv1 />

            <DigiteSeuNome />

            <ListaProdutosv2 />

            <ListaProdutos />

            <UsuarioLogado usuario={{}} />

            <UsuarioLogado usuario={null} />

            <UsuarioLogado usuario={{
                email: 'carlos@carlos.com'
            }} />

            <UsuarioLogado usuario={{
                nome: 'Ana'
            }} />

            <UsuarioLogado usuario={{
                nome: 'Gui',
                email: 'gui@gui.com'
            }} />

            <Familia>
                <Membro nome="Bia" sobrenome="Arruda" />
                <Membro nome="Carlos" sobrenome="Arruda" />
            </Familia>

            <Familia>
                <Membro nome="Ana" sobrenome="Silva" />
                <Membro nome="Julia" sobrenome="Silva" />
                <Membro nome="Gui" sobrenome="Silva" />
            </Familia>

            <ParImpar num={2} />

            <Diferenciar />

            <Contadorv2 />

            <Pai2 />

            <Pai />

            <Contador />
            <Contador inicial={10} passo={5} />

            <Botao />

            <Titulo
                principal="Cadastro de Produto"
                secundario="Tela de cadastro de produto"
            />

            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />

            <MinMax min={1} max={2} />

             <CompPadrao />
            <Comp2 />
            <Comp3 />

            <Primeiro /> */}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20

    }
})

export default App