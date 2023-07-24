import { title } from 'process'
import Titulo from '../../components/Titulo'

export default function usandoTitulo(){
    return (
        <div>
            <Titulo 
                principal='Página de cadastro'
                descricao='Incluir, alterar e excluir coisas'
                //Sem o parametro pequeno ele interpreta como false
            />
              <Titulo 
                principal='Página de Login'
                descricao='Informe seu e-mail e senha'
                //pequeno={true}
                //ele vai considerar o pequeno como true mesmo nao tendo passado parametro
                pequeno
            />
        </div>
    )
}