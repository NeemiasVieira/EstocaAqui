import { ProdutosStyle } from "./ProdutosStyle";
import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../../componentes/ListaProdutos/ListaProdutos";
import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import { useEffect, useState } from "react";
import { ModalCriarProduto } from "../../componentes/Modais/ModalCriarProduto/ModalCriarProduto";

const Produtos = () => {
  const navigate = useNavigate();
  const [atualizaPag, setAtualizaPag] = useState(false);

  useEffect(() => {

  },[atualizaPag])
  return (
    <>
      <Navegacao loginValido={true} />
      <ProdutosStyle>
        <h2>Produtos</h2>
        <ModalCriarProduto aux={{atualizaPag, setAtualizaPag}}/>
        <ListaProdutos atualizaPag={atualizaPag} setAtualizaPag={setAtualizaPag}/>
      </ProdutosStyle>
      <Footer />
    </>
  );
};

export default Produtos;

