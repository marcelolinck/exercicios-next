export default function jsx4() {
  const subtitulo = "Estou no JavaScript";

  const trechoh3 = <h3>{3 * 3}</h3> 

  //para usar a variavel, basta colocar entre chaves.
  return (
    <div>
      <h1>Integracao com JS e JSX</h1>
      <h2>{subtitulo}</h2>
      {trechoh3}
      <h4>{Math.max(13, 39)}</h4>
      <h5>{entre(30,1,10)}</h5>
    </div>
  );
}

function entre(valor, min, max) {
  if (valor >= min && valor <= max) {
    return "Sim";
  } else {
    return "Não";
  }
}
