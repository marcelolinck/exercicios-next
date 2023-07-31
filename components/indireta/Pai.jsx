import Filho from "./Filho";

export default function Pai(){


    function falarComigo(param1, param2, param3){
        console.log(param1, param2, param3)
        //console.log('Alguem esta falando comigo')
    }

    return (
        <div>
            <Filho funcao={falarComigo}/>

        </div>
    )
}