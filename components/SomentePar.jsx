export default function SomentePar(props){

    //Dessa forma tradicional
    // if (props.numero % 2 === 0 ) {

    //     return <h1>{props.numero}</h1>
    // }else{
    //     return null
    // }


    const numeroPar = props.numero % 2 === 0
    
    //Ou dessa forma com operador ternario
   // return numeroPar ? <h1>{props.numero}</h1> : null

   //Ou até retornando com um trecho jsx
   return (
    <div>
        {
            numeroPar ? 
                <h1>{props.numero}</h1> : 
                null
        }
   </div>
   )
    
}