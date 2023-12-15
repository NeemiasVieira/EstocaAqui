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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDI2NDgzOTgsImV4cCI6MTcwMjY3MzU5OCwic3ViIjoiMTIifQ.95nViZWVPXS9gpMBLgDkuk7YOEnyRfSGEdHL4hzG-8M",
      },
    };

    await estoca_api
      .get("/entrada", token)
      .then((resposta) => this.setEntrada(resposta.data))
      .catch((erro) => this.setErro(erro));
  }
}
