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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDI5MDYxNTEsImV4cCI6MTcwMjkzMTM1MSwic3ViIjoiNCJ9._cKlRInRdD85X56U-IbYy_lTda51N1Y9VfAcKaiKlxY",
      },
    };

    await estoca_api
      .get("/saida", token)
      .then((resposta) => {this.setSaida(resposta.data); console.log(resposta)})
      .catch((erro) => this.setErro(erro));
  }
}