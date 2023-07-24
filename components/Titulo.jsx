export default function Titulo(props) {
  
//     if (props.pequeno) {
//     return (
//       <>
//         <p>{props.principal}</p>
//         <h2>{props.descricao}</h2>
//       </>
//     )
//   } else
//     return (
//       <>
//         <h1>{props.principal}</h1>
//         <h2>{props.descricao}</h2>
//       </>
//     )

//Passando como operador ternário
    return (props.pequeno) ? (
      <>
        <p>{props.principal}</p>
        <h2>{props.descricao}</h2>
      </>
    ): (
      <>
        <h1>{props.principal}</h1>
        <h2>{props.descricao}</h2>
      </>
    )
}
