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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDI5MDYxNTEsImV4cCI6MTcwMjkzMTM1MSwic3ViIjoiNCJ9._cKlRInRdD85X56U-IbYy_lTda51N1Y9VfAcKaiKlxY",
      },
    };

    await estoca_api
      .get("/entrada", token)
      .then((resposta) => this.setEntrada(resposta.data))
      .catch((erro) => this.setErro(erro));
  }
}
