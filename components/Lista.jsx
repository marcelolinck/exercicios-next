export default function Lista(props) {
  return (
    <div>
      <h1>Lista de Algo</h1>

      {/* Dessa forma consigo injetar um componente no componente pai e indicar a posicao que será injetado 
        dentro do componente filho */}

      <ul
        style={{
          padding: 10,
         
        }}
      >
        {props.children}
      </ul>
    </div>
  );
}
