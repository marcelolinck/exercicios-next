import Pai from "../../components/direta/Pai";

export default function direta(){
    return(
        <div>
            {/* Se eu passar dessa forma o nome, ele irá sobrescrever o atributo do componente pai, mesmo tendo esse atributo lá. Mas isso vai depender da ordem que for colocado */}
            <Pai familia='Albuquerque #2' nome='Padrão'/>
        </div>
    )
}