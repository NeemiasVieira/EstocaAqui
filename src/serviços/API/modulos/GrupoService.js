import estoca_api from "../api";

export class GrupoService{

    setResposta;
    setErro;

    constructor(setResposta, setErro){
        this.setResposta = setResposta;
        this.setErro = setErro
    }

    async cadastrarGrupo(usuario, grupo){
       await estoca_api.post("/grupo", { usuario, grupo })
        .then(resposta => this.setResposta(resposta))
        .catch(erro => this.setErro(erro));

    }
    
}

export const buscaCNPJ = async(cnpj) => {
    const resposta = await estoca_api.get(`/grupo/verifica-cnpj?cnpj=${cnpj}`);
    return resposta.data;
}