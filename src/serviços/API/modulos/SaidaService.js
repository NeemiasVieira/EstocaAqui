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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDI2NjQzMTAsImV4cCI6MTcwMjY4OTUxMCwic3ViIjoiNCJ9.7ciNV7dYE1Df-w-Xjs5guoE1HhI3mMtVVMF8GtZsrEc",
      },
    };

    await estoca_api
      .get("/saida", token)
      .then((resposta) => {this.setSaida(resposta.data); console.log(resposta)})
      .catch((erro) => this.setErro(erro));
  }
}