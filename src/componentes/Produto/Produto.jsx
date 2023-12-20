import { ProdutoStyle, ProdutoSection, ProdutoParagraph } from "./ProdutoStyle";

const Produto = ({ produto, produtoCompleta }) => {
  return (
    <ProdutoStyle>
      {produtoCompleta && (
        <ProdutoSection>
          <ProdutoParagraph>Nome: {produto.nome}</ProdutoParagraph>
          <ProdutoParagraph>Quantidade: {produto.quantidade}</ProdutoParagraph>
          <ProdutoParagraph>Descrição: {produto.descricao}</ProdutoParagraph>
          <ProdutoParagraph>Tipo: {produto.tipo}</ProdutoParagraph>
        </ProdutoSection>
        )}
        <ProdutoSection>
        <ProdutoParagraph>Nome: {produto.nome}</ProdutoParagraph>
        <ProdutoParagraph>Quantidade: {produto.quantidade}</ProdutoParagraph>
        </ProdutoSection>
</ProdutoStyle>
  );
};

export default Produto;
