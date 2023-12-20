import estoca_api from "../api";

export class SaidaService {
  setSaida;
  setErro;

  constructor(setSaida, setErro) {
    this.setSaida = setSaida;
    this.setErro = setErro;
  }

  async getSaidas() {
    const token = {
      headers: {
        Authorization:
        `Bearer ${localStorage.getItem("token")}`,
      },
    };

    await estoca_api
      .get("/saida", token)
      .then((resposta) => {this.setSaida(resposta.data); console.log(resposta)})
      .catch((erro) => this.setErro(erro));
  }
}