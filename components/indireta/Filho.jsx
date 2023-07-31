export default function Filho(props){

    //Passei no enem

    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            {/* dessa forma está passando somente o evento do click via param para o pai */}
            <button onClick={props.funcao}>Falar com o pai</button>
            
            {/* Acontece da mesma forma assim */}
            <button onClick={ev => props.funcao(ev)}>Falar com o pai V2</button>

            {/* Dessa forma o filho consegue passar informacoes para o componente pai. Lembrando que tem que ter o param lah no pai */}
            <button onClick={() => props.funcao('Passei no ENEM', 'Uhuuu', 10)}>Falar com o pai V3</button>
        </div>
    )
}