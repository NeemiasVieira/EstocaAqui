import estoca_api from "../api";

export class ProdutoService {
  setProduto;
  setErro;

  constructor(setProduto, setErro) {
    this.setProduto = setProduto;
    this.setErro = setErro;
  }

  async getProdutos(ordernarPor = null, filtrarPor = null) {
    const token = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    let url = "/produto";
    let queryParams = [];

    if (filtrarPor) {
      const corCodificada = filtrarPor.replace(/#/g, "%23");
      queryParams.push(`cor=${corCodificada}`);
    }

    if (ordernarPor) {
      queryParams.push(`ordenarPor=${ordernarPor}`);
    }

    if (queryParams.length > 0) {
      url += `?${queryParams.join("&")}`;
    }

    await estoca_api
      .get(url, token)
      .then((resposta) => this.setProduto(resposta.data)) 
      .catch((erro) => this.setErro(erro));
  }

  async createProduto(produto) {
    const token = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    await estoca_api
      .post("/produto", produto, token)
      .then((response) => this.setProduto(response))
      .catch((erro) => this.setErro(erro));
  }

  async deleteProduto(id_produto) {
    const token = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    await estoca_api
      .delete(`/produto/${id_produto}`, token)
      .then((response) => this.setProduto(response))
      .catch((erro) => this.setErro(erro));
  }
}
