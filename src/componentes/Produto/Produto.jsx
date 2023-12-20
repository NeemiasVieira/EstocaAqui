import { ProdutoStyle } from "./ProdutoStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPenToSquare, faBars} from "@fortawesome/free-solid-svg-icons"

export const Produto = ({produto}) => {
    return(
        <ProdutoStyle>
            <span></span>
            <p className="nome">{produto.nome}</p>
            <p className="quantidade">{produto.quantidade}</p>
            <p className="valor-de-compra">R$30,00</p>
            <p className="valor-de-venda">R$45,00</p>
            <button className="BotaoEntradas"><FontAwesomeIcon icon={faBars}/> Entradas relacionadas</button>
            <p className="icones"><FontAwesomeIcon icon={faPenToSquare} className="botaoEdicao"/></p>
            <p><FontAwesomeIcon icon={faTrash} className="botaoExclusao"/></p>
        </ProdutoStyle>
    )
}