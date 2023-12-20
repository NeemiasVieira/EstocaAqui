import estoca_api from "../api";

export class EntradaService {
  setEntrada;
  setErro;

  constructor(setEntrada, setErro) {
    this.setEntrada = setEntrada;
    this.setErro = setErro;
  }

  async getEntradas() {
    const token = {
      headers: {
        Authorization:
        `Bearer ${localStorage.getItem("token")}`,
      },
    };

    await estoca_api
      .get("/entrada", token)
      .then((resposta) => this.setEntrada(resposta.data))
      .catch((erro) => this.setErro(erro));
  }
}
