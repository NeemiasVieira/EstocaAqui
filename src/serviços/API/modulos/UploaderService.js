import axios from "axios";

export class UploaderService {
  setResposta;
  setErro;

  constructor(setResposta, setErro) {
    this.setResposta = setResposta;
    this.setErro = setErro;
  }

  async enviarImagem(arquivo) {
    try {
      const formData = new FormData();
      formData.append('image', arquivo);

      const resposta = await axios.post('https://estoca-aqui-api-neemiasvieira.vercel.app/uploader/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      this.setResposta(resposta.data.link);
    } catch (erro) {
      this.setErro(erro.message);
    }
  }
}