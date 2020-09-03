import React from 'react'

import Filho from './Filho'

const Pai = () => {
    let x = 13
    let y = 100

    return (
        <>
            <Filho a={x} b={y} />
            <Filho a={x + 100} b={y + 100} />
        </>
    )
}

export default Pai