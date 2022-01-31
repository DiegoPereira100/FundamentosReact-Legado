import React from 'react'
import ReactDOM from 'react-dom'

// import Familia from './components/Familia'
// import ComponenteComFuncao from './components/ComponenteComFuncao'
import Pai from './components/Pai'


const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Pai></Pai>
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Pereira" /> */}
    </div>
    , elemento)