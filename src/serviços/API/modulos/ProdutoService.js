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

  async createProduto(produto){
    const token = {
      headers: {
        Authorization:
        `Bearer ${localStorage.getItem("token")}`,
      },
    };
    await estoca_api.post("/produto", produto, token)
    .then(response => this.setProduto(response))
    .catch(erro => this.setErro(erro));
  }

  async deleteProduto(id_produto){

    const token = {
      headers: {
        Authorization:
        `Bearer ${localStorage.getItem("token")}`,
      },
    };

    await estoca_api.delete(`/produto/${id_produto}`, token)
    .then(response => this.setProduto(response))
    .catch(erro => this.setErro(erro));
  }
}