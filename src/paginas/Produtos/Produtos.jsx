import { ProdutosStyle } from "./ProdutosStyle"
import { useNavigate } from "react-router-dom";
import { Navegacao } from "../../componentes/Navegacao/Navegacao";

const Produtos = () => {
    const navigate = useNavigate();
    return(
        <ProdutosStyle>
            <p>Produtos</p>
            <Navegacao loginValido={true}/>
        </ProdutosStyle>
    )
}
export default Produtos;