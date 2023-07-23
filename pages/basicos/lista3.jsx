//Se nao for informado o valor, será considerado o valor do lado do igual
function gerarLista(final = 10) {
  //Para criar um array no js, é feito dessa forma
  const lista = [];

  for (let i = 1; i <= final; i++) {
    lista.push(<span>{i},</span>);
  }
  return lista;
}

export default function lista3() {
  return (
    <div>
      <div>{gerarLista(20)}</div>
      <div>{gerarLista(3)}</div>
    </div>
  );
}
