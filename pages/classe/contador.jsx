import Contador from "@/components/Contador";
import { Component} from "react";

export default class ContadorPage extends Component{

    // Com o metodo render, consigo rendenizar uma classe na tela

    render(){
        return(
            <div>
                <Contador valorInicial={100} passo={37}/>
                {/* <Contador /> */}
            </div>
        )
    }
}