import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { useCadastroContext } from "../../contextos/CadastroContext";
import { CadastroEmpresa } from "./CadastroStyles";
import { useNavigate } from "react-router-dom";


const validarCPF = (cpf) => {
  // Remove caracteres não numéricos
  const cpfLimpo = cpf.replace(/\D/g, '');

  // Verifica se o CPF tem 11 dígitos
  if (cpfLimpo.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais, o que invalida o CPF
  if (/^(\d)\1+$/.test(cpfLimpo)) {
    return false;
  }

  // Algoritmo de validação de CPF
  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpfLimpo.substring(9, 10))) {
    return false;
  }

  soma = 0;

  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpfLimpo.substring(10, 11))) {
    return false;
  }

  return true;
};

const formatarCPF = (cpf) => {
  // Remove caracteres não numéricos
  const cpfLimpo = cpf.replace(/\D/g, '');

  // Formatação dinâmica
  let cpfFormatado = '';

  for (let i = 0; i < cpfLimpo.length; i++) {
    if (i === 3 || i === 6) {
      cpfFormatado += '.'; // Adiciona ponto após o terceiro e sexto dígitos
    } else if (i === 9) {
      cpfFormatado += '/'; // Adiciona barra após o nono dígito
    }

    cpfFormatado += cpfLimpo[i];
  }

  return cpfFormatado;
};



const Cadastro3 = () => {
  const { usuario, setNome, setCpf } = useCadastroContext();
  const [cpfValido, setCpfValido] = useState(false);
  const [erro, setErro] = useState();
  const navigate = useNavigate();

  const onChangeCPF = (e) => {
    const novoCpf = e.target.value;
    const cpfFormatado = formatarCPF(novoCpf);
    setCpf(cpfFormatado);
  
    // Validação ao completar o CPF
    if (novoCpf.length === 14) {
      setCpfValido(validarCPF(novoCpf));
    } else {
      setCpfValido(false); 
    }
  };

  const botaoProximo = (e) => {
    e.preventDefault();

    if(cpfValido && usuario.nome.length > 5){
      setErro(null);
      navigate("/cadastro/4");
      return
    }

    setErro("Todos os campos precisam estar preenchidos corretamente");

  }

  useEffect(() => {
    if(validarCPF(usuario.cpf)) setCpfValido(true);
  },[])

  return (
    <CadastroEmpresa>
    <h1>Dados do Usuário</h1>
      <form>
        <label htmlFor="">Nome</label>
        <div className="divInput">
          <div className="divIcon">
            <FontAwesomeIcon icon={faFont} />
          </div>
          <input
            type="text"
            placeholder="Digite o seu nome"
            value={usuario.nome}
            onChange={(e) => {
                setNome(e.target.value);
            }}
          />
        </div>
        <label htmlFor="">CPF</label>
        <div className="divInput">
          <div className="divIcon">
            <FontAwesomeIcon icon={faAddressCard} />
          </div>
          <input
            type="text"
            placeholder="Digite o seu CPF"
            value={usuario.cpf}
            maxLength={14}
            onChange={(e) => {
              onChangeCPF(e);
            }}
          />
        </div>
        {erro && (<p className="mensagemDeErro">{erro}</p>)}
        <div className="BotoesProximoVoltar">
          <Link to="/cadastro/2">Voltar</Link>
          <button className="ButtonLink" onClick={(e) => botaoProximo(e)}>Próximo</button>
        </div>
      </form>
    </CadastroEmpresa>
  );
};

export default Cadastro3;
