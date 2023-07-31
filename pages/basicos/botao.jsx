// Esta aula é para demostrar como o react funciona para chamar uma funcao sendo dentro do componente, fora do componente ou até mesmo como função anonima

function acao1() {
  console.log("Acao1");
}

export default function botao() {
  function acao2() {
    console.log("Acao2");
  }
  function acao5(e) {
    console.log(e);
  }

  return (
    <div>
      <button onClick={acao1}>Click #01</button>
      <button onClick={acao2}>Click #02</button>
      <button
        onClick={function () {
          console.log("Acao 3");
        }}
      >
        Click #03
      </button>
      <button
        onClick={()=>{
          console.log("Acao 4")
        }}
      >
        Click #04
      </button>
{/* Aqui consigo verificar o que aconteceu quando o botao foi clicado */}
      <button onClick={acao5}>Click #05</button>
      {/* Aqui vai dar true somente quando clicar e o alt estiver pressionado */}
      <button onClick={e => acao5(e.altKey)}>Click #05 V2</button>
      <div>
        <input type="text" onChange={e => console.log(e.target.value)} />
      </div>
    </div>
  );
}
