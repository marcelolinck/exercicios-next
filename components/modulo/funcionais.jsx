//Se exportar como default a função, na hora de importar posso importar com qualquer nome que vai funcionar, mas por boa pratica, importamos 
//com o mesmo nome ou atle exportar como uma funcao anonima
//Dá pra escolher uma das formas e padronizar em um projeto 
export function Comp1(){
//export default function Comp1(){
    return (
            <div>
                <h2>Comp #01</h2>
            </div>
        )
}

//Agora com uma funcao anonima
export const Comp2 = function(){
    return (
        <div>
            <h2>Comp #02</h2>
        </div>
    )
}


//Agora se foi exportado algo como padrao podemos fazer da seguinte forma
export default function(){
    return(
        <div>
            <h2>Comp #03</h2>
        </div>
    )
}

//Dentro de uma funcao arrow, náo precisa colocar o return pois está implicito no retorno.

export const Comp4 = () => {
    return <h2>Comp #04</h2>
}

const Comp5 = () => <h2>Comp #05</h2>

const Comp6 = props => (
    <div>
        <h2>Comp #06 - {props.msg}</h2>
    </div>
)

//Se pode exportar todos os componentes de uma vez dessa forma sem a necessidade de colocar o export em cada uma das constantes
export {
    Comp5, Comp6
}