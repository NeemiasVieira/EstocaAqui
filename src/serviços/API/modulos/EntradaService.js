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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDI1Nzc3MzUsImV4cCI6MTcwMjYwMjkzNSwic3ViIjoiMTMifQ.r8s7QUCHNu33JvjeQFDwfSChIoPIeC0e8zfBBPJIZ4c",
      },
    };

    await estoca_api
      .get("/entrada", token)
      .then((resposta) => this.setEntrada(resposta.data))
      .catch((erro) => this.setErro(erro));
  }
}
