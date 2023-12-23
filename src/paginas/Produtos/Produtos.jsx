import { ProdutosStyle } from "./ProdutosStyle";
import { ListaProdutos } from "../../componentes/Produtos/ListaProdutos/ListaProdutos";
import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import { ModalCriarProduto } from "../../componentes/Produtos/ModalCriarProduto/ModalCriarProduto";
import { AtualizarPaginaProvider } from "../../contextos/AtualizarPaginaProvider";

const Produtos = () => {

  return (
    <>
      <Navegacao loginValido={true} />
      <ProdutosStyle>
        <h2>Produtos</h2>
        <AtualizarPaginaProvider>
          <ModalCriarProduto/>
          <ListaProdutos/>
        </AtualizarPaginaProvider>
      </ProdutosStyle>
      <Footer />
    </>
  );
};

export default Produtos;
