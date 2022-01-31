import React from 'react'
import ReactDOM from 'react-dom'

// import Familia from './components/Familia'
// import ComponenteComFuncao from './components/ComponenteComFuncao'
// import Pai from './components/Pai'
// import ComponenteClasse from './components/ComponenteClasse'
// import Contador from './components/Contador'
import Hook from './components/Hook'


const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook />
        {/* <Contador numeroInicial={20}/> */}
    {/* <ComponenteClasse valor="opaopa"/> */}
        {/* <Pai></Pai> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Pereira" /> */}
    </div>
    , elemento)