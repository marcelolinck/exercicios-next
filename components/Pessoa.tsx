interface PessoaProps{
    nome: string,
    //com a interrogacao do lado, irá deixar o componente como opcional
    idade? : number
}

export default function Pessoa(props: PessoaProps){
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? 'Não Informada'}</div>
        </div>
    )
}