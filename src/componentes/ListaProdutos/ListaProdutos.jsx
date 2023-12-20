import { ListaProdutosStyle } from "./ListaProdutosStyle"
import { Produto } from "../Produto/Produto"

export const ListaProdutos = () =>{
    return(
        <ListaProdutosStyle>
            <div className="titulo">
                <p className="nome1">Nome</p>
                <p className="quantidade1">Quantidade</p>
                <p className="valor-de-compra1">Valor de Compra</p>
                <p className="valor-de-venda1">Valor de Venda</p>
                <p className="acoes">Ações</p>
            </div>
            <div className="produtos">
            <Produto produto={{nome: "Bolacha Negresco", quantidade: 25}}/>
            <Produto produto={{nome: "Bolacha Negresco", quantidade: 25}}/>
            <Produto produto={{nome: "Bolacha Negresco", quantidade: 25}}/>
            </div>
        </ListaProdutosStyle>
    )
}