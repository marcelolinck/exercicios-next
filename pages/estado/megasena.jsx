import {useState} from "react"
import {mega} from "../../functions/mega"

export default function megasena(){
    const [numeros, setNumeros] = useState(mega())

    return(
        <div>
            <h1>Mega Sena</h1>
        </div>
    )
}