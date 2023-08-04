import {useState} from 'react'
import ContadorDisplay from '@/components/ContadorDisplay'


export default function contador(){

    const botao = {
        width: 30,
        heigth: 50,
        margin: 10, 
        alignItens: 'center',
    }

    // function inc(){
    //     setNumero(numero + 1 )
    // }

    //Com ArrowFunction
    const inc = () => {
        setNumero(numero + 1 )
    }
    // function dec(){
    //     setNumero(numero - 1 )
    // }
    //Opcao de uma linha somente 
    const dec = ()=> setNumero(numero - 1 )
    


    const [numero, setNumero] = useState(0)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center",
            alignItems: "center",

        }}>
            <h1>Contador</h1>
            {/*<div>Valor: {numero}</div>*/}
            <ContadorDisplay numero={numero}/>
            <div>
                <button onClick={dec} style={botao}> - </button>
                <button onClick={inc} style={botao}> + </button>
            </div>
        </div>
    )
}
