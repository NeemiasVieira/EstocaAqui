import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import Entrada from "../../componentes/Entrada/Entrada";
import Saida from "../../componentes/Saida/Saida";
import { EntradaService } from "../../serviços/API/modulos/EntradaService";
import { useEffect, useState } from "react";
import { SaidaService } from "../../serviços/API/modulos/SaidaService";

const usuario = {
  nome: "Diogo",
  email: "dioguinho",
  outrasPropriedades: "desnecessárias",
};
/*
const saidas = [
  {
      "id": 5,
      "tipo": "Outros",
      "descricao": "hp na casa do neemias",
      "nf": "32191105570714000825550010059146621133082968",
      "id_usuario": 12,
      "item": [
          {
              "id_produto": 4,
              "quantidade": 10
          },
          {
              "id_produto": 5,
              "quantidade": 9
          }
      ],
      "createdAt": "2023-12-15T14:23:58.682Z",
      "updatedAt": "2023-12-15T14:23:58.682Z"
  },
  {
      "id": 6,
      "tipo": "Outros",
      "descricao": "hp na casa do neemias",
      "nf": "32191105570714000825550010059146621133082968",
      "id_usuario": 12,
      "item": [
          {
              "id_produto": 4,
              "quantidade": 8
          },
          {
              "id_produto": 5,
              "quantidade": 9
          },
          {
              "id_produto": 6,
              "quantidade": 10
          }
      ],
      "createdAt": "2023-12-15T14:26:11.019Z",
      "updatedAt": "2023-12-15T14:26:11.019Z"
  },
  {
      "id": 7,
      "tipo": "Outros",
      "descricao": "hp na casa do diogo",
      "nf": "32191105570714000825550010059146621133082968",
      "id_usuario": 12,
      "item": [
          {
              "id_produto": 4,
              "quantidade": 8
          },
          {
              "id_produto": 5,
              "quantidade": 9
          },
          {
              "id_produto": 6,
              "quantidade": 10
          }
      ],
      "createdAt": "2023-12-15T14:26:21.651Z",
      "updatedAt": "2023-12-15T14:26:21.651Z"
  },
  {
      "id": 8,
      "tipo": "Outros",
      "descricao": "hp na casa do gabriel",
      "nf": "32191105570714000825550010059146621133082968",
      "id_usuario": 12,
      "item": [
          {
              "id_produto": 4,
              "quantidade": 2
          },
          {
              "id_produto": 5,
              "quantidade": 1
          },
          {
              "id_produto": 6,
              "quantidade": 9
          }
      ],
      "createdAt": "2023-12-15T14:27:25.484Z",
      "updatedAt": "2023-12-15T14:27:25.484Z"
  },
  {
      "id": 9,
      "tipo": "Outros",
      "descricao": "hp na casa do gabriel",
      "nf": "32191105570714000825550010059146621133082968",
      "id_usuario": 12,
      "item": [
          {
              "id_produto": 4,
              "quantidade": 2
          },
          {
              "id_produto": 5,
              "quantidade": 1
          },
          {
              "id_produto": 6,
              "quantidade": 9
          }
      ],
      "createdAt": "2023-12-15T14:27:40.577Z",
      "updatedAt": "2023-12-15T14:27:40.577Z"
  },
  {
      "id": 10,
      "tipo": "Outros",
      "descricao": "hp na casa do gabriel",
      "nf": "32191105570714000825550010059146621133082968",
      "id_usuario": 12,
      "item": [
          {
              "id_produto": 4,
              "quantidade": 2
          },
          {
              "id_produto": 5,
              "quantidade": 1
          },
          {
              "id_produto": 6,
              "quantidade": 9
          }
      ],
      "createdAt": "2023-12-15T14:27:48.474Z",
      "updatedAt": "2023-12-15T14:27:48.474Z"
  }
]
*/


const Homepage = () => {
    const [entradas, setEntrada] = useState();
    const [saidas, setSaidas] = useState();
    const [erro, setErro] = useState();

    const entradaService = new EntradaService(setEntrada, setErro);
    const saidaService = new SaidaService(setSaidas, setErro)
 
  useEffect(() => {
    saidaService.getSaidas();
    entradaService.getEntradas();
  }, []);

  return (
    <>
      <Navegacao />
      <h1>Bem vindo, {usuario.nome}</h1>
      <section>
        <p>Últimas saídas:</p>
        {saidas &&
          saidas.map((saida) =>(
        <Saida
            key={saida.id}
            saida={saida}
            saidaCompleta={false}
        />
          ))}       


        <p>Últimas entradas:</p>
        {entradas &&
          entradas.map((entrada) => (
            <Entrada
              key={entrada.id}
              entrada={entrada}
              entradaCompleta={false}
            />
          ))}
      </section>
      <button>Estoque</button>
      <button>Entradas</button>
      <button>Saídas</button>
      <Footer />
    </>
  );
};

export default Homepage;
