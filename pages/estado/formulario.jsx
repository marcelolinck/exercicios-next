import { useState } from "react"

export default function formulario() {
    
    // Se colocar um valor dentro do parenteses do useState ele vai se tornar o valor default do componente
    const [valor, setValor] = useState("")

    function alterarInput() {
        setValor(valor + "!")
    }

    //    Componente nao controlado - Component Uncontrolled. O estado do componente nesse caso sempre serão com o mesmo estado. Caso queira usar o componente nao controlado 
    // dai podemos usar o valor Inicial como undefined ou vazio " " 
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            {/* Dessa forma consigo alterar o valor do input */}
            <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}