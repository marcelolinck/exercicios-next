
//Posso renomear uma funcao dessa forma colocando um as e o nome que eu quero
//Outra coisa, quando o componente foi exportado como padrao, podemos importá-lo sem as chaves
import Padrao, { Comp1 as Blabla, Comp2, Comp4, Comp5, Comp6 } from "@/components/modulo/funcionais"

//Se foi exportado como default podemos importar o componente dessa forma sem as chaves
//import Comp1  from "@/components/modulo/funcionais"

export default function teste(){
    return(
        <div>
            <Blabla />
            <Comp2 />
            <Padrao />
            <Comp4 />
            <Comp5 />
            <Comp6 msg="Este é o componente 6" />
        </div>
    )
    
}