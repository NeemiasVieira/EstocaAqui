import estoca_api from "../api";

export class ProdutoService {
  setProduto;
  setErro;

   constructor(setProduto, setErro){
       this.setProduto = setProduto;
       this.setErro = setErro;
   }

   async getProdutos(){
    const token = {
        headers: {
          Authorization:
          `Bearer ${localStorage.getItem("token")}`,
        },
      };

      await estoca_api
      .get("/produto", token)
      .then((resposta) => this.setProduto(resposta.data.produto))
      .catch((erro) => this.setErro(erro));
  }
}