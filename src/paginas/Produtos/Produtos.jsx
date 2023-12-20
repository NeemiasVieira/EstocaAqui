import { ProdutosStyle } from "./ProdutosStyle";
import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../../componentes/ListaProdutos/ListaProdutos";
import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";

const Produtos = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navegacao loginValido={true} />
      <ProdutosStyle>
        <h2>Produtos</h2>
        <ListaProdutos />
      </ProdutosStyle>
      <Footer />
    </>
  );
};

export default Produtos;

