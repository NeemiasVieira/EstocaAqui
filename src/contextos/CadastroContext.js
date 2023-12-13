import { createContext, useContext, useState } from "react"


const usuarioInicial = {
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    imagem_de_perfil: "",
    cpf: "",
    permissao: "admin",
    id_grupo: 0
}

const grupoInicial = {
    razao_social: "",
    nome_fantasia: "",
    cnpj: "",
    logo: "",
    banner: ""
}

export const cadastroContext = createContext({
    usuario: usuarioInicial,
    grupo: grupoInicial,
    setNome: () => null,
    setEmail: () => null,
    setTelefone: () => null,
    setSenha: () => null,
    setImagemDePerfil: () => null,
    setCpf: () => null,
    setPermissao: () => null,
    setIdGrupo: () => null,
    setRazaoSocial: () => null,
    setNomeFantasia: () => null,
    setCnpj: () => null,
    setLogo: () => null,
    setBanner: () => null,
})

export const useCadastroContext = () => {
    return useContext(cadastroContext);
}

export const CadastroProvider = ( {children} ) => {

    const [usuario, setUsuario] = useState(usuarioInicial);
    const [grupo, setGrupo] = useState(grupoInicial);

    const setNome = (nome) => {
        setUsuario(estadoAnterior => {
            return {...estadoAnterior, nome}
        })
    }

    const setEmail = (email) => {
        setUsuario(estadoAnterior => {
            return {...estadoAnterior, email}
        })
    }
    const setTelefone = (telefone) => {
        setUsuario(estadoAnterior => {
            return {...estadoAnterior, telefone}
        })
    }
    const setSenha = (senha) => {
        setUsuario(estadoAnterior => {
            return {...estadoAnterior, senha}
        })
    }
    const setImagemDePerfil = (imagem_de_perfil) => {
        setUsuario(estadoAnterior => {
            return {...estadoAnterior, imagem_de_perfil}
        })
    }
    const setCpf = (cpf) => {
        setUsuario(estadoAnterior => {
            return {...estadoAnterior, cpf}
        })
    }
    const setPermissao = (permissao) => {
        setUsuario(estadoAnterior => {
            return {...estadoAnterior, permissao}
        })
    }

    const setIdGrupo = (id_grupo) => {
        setUsuario(estadoAnterior => {
            return {...estadoAnterior, id_grupo}
        })
    }

    const setRazaoSocial = (razao_social) => {
        setGrupo(estadoAnterior => {
            return {...estadoAnterior, razao_social}
        })
    }
    const setNomeFantasia = (nome_fantasia) => {
        setGrupo(estadoAnterior => {
            return {...estadoAnterior, nome_fantasia}
        })
    }
    const setCnpj = (cnpj) => {
        setGrupo(estadoAnterior => {
            return {...estadoAnterior, cnpj}
        })
    }
    const setLogo = (logo) => {
        setGrupo(estadoAnterior => {
            return {...estadoAnterior, logo}
        })
    }
    const setBanner = (banner) => {
        setGrupo(estadoAnterior => {
            return {...estadoAnterior, banner}
        })
    }

    const contexto = {
        usuario,
        grupo,
        setNome,
        setEmail,
        setTelefone,
        setSenha,
        setImagemDePerfil,
        setCpf,
        setPermissao,
        setIdGrupo,
        setNomeFantasia,
        setRazaoSocial,
        setCnpj,
        setLogo,
        setBanner
    }

    return (
    <cadastroContext.Provider value={contexto}>
        {children}
    </cadastroContext.Provider>)

}