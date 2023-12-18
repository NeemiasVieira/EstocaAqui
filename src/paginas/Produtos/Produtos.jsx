import { ProdutosStyle } from "./ProdutosStyle"
import { useNavigate } from "react-router-dom";

const Produtos = () => {
    const navigate = useNavigate();
    return(
        <ProdutosStyle>
            <p>Produtos</p>
            <button onClick={() => {
                localStorage.removeItem("tokenValido");
                localStorage.removeItem("token");
                localStorage.removeItem("nome");
                localStorage.removeItem("userID");
                navigate("/login");
            }}>Deslogar</button>
        </ProdutosStyle>
    )
}

export default Produtos;