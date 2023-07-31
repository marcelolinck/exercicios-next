import If from "@/components/If";


export default function condicional2(){
    
    const numero = 2
    
    return (
        <div>
            <If teste={numero % 2 === 0 }>
                O numero {numero} é par
            </If>
            <If teste={numero % 2 !== 0 }>
                O numero {numero} é ímpar
            </If>

        </div>
    )
}