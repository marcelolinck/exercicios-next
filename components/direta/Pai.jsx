import Filho from "./Filho";

export default function Pai(props){
    return(
        <div>
            <h1>Familia {props.familia}</h1>
            <Filho nome='Pedro' familia={props.familia}/>
            <Filho nome='Joana' familia={props.familia}/>
            {/* ...props, recebe os atributos do componente acima e repassa do pai para o filho direto tudo.
            Se colocar o ...props, antes, vai permanecer o valor do atributo que está no componente, agora se colocar depois, ele vai sobrescrever o valor e vai colocar o valor que veio da props */}

            {/* Importante lembrar que props será somente leitura */}
            <Filho {...props} nome='Gabriel'/>
        </div>
    )
}