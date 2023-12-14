import estoca_api from "../api";

export class EntradaService {
  setEntrada;
  setErro;

  constructor(setEntrada, setErro) {
    this.setEntrada = setEntrada;
    this.setErro = setErro;
  }

  async getEntradas(token) {
    await estoca_api
      .get("/entrada", token)
      .then((resposta) => this.setEntrada(resposta))
      .catch((erro) => this.setErro(erro));
  }
}
