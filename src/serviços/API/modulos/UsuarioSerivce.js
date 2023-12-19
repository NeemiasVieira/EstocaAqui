import estoca_api from "../api";

export class UsuarioService{

    setResposta;
    setErro;

    constructor(setResposta, setErro){
        this.setResposta = setResposta;
        this.setErro = setErro
    }

    async login(email, senha){
        await estoca_api.post("/usuario/login", {email, senha})
        .then(resposta => this.setResposta(resposta))
        .catch(erro => this.setErro(erro.response.data.message));
    }

   
}

export const buscaCPF = async(cpf) => {
    const resposta = await estoca_api.get(`/usuario/verifica-cpf?cpf=${cpf}`);
    return resposta.data;
}