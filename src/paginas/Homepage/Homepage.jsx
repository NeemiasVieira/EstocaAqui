import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import Entrada from "../../componentes/Entrada/Entrada";
import Saida from "../../componentes/Saida/Saida";

const usuario = {
  nome: "Diogo",
  email: "dioguinho",
  outrasPropriedades: "desnecessárias",
};

const entradas = [
  {
    id: 8,
    tipo: "Compra",
    descricao: "Compra de novos materiais para o escritório",
    nf: "32191105570714000825550010059146621133082968",
    id_fornecedor: "5",
    id_usuario: "13",
    item: [
      {
        id_produto: 3,
        quantidade: 5,
      },
      {
        id_produto: 3,
        quantidade: 7,
      },
    ],
    createdAt: "2023-12-14T18:20:20.199Z",
    updatedAt: "2023-12-14T18:20:20.199Z",
  },
  {
    id: 9,
    tipo: "Compra 2",
    descricao: "Compra de novos materiais para o escritório",
    nf: "32191105570714000825550010059146621133082968",
    id_fornecedor: "5",
    id_usuario: "13",
    item: [
      {
        id_produto: 3,
        quantidade: 5,
      },
      {
        id_produto: 3,
        quantidade: 7,
      },
    ],
    createdAt: "2023-12-14T18:20:59.797Z",
    updatedAt: "2023-12-14T18:20:59.797Z",
  },
  {
    id: 10,
    tipo: "Compra 3",
    descricao: "Compra de novos materiais para o escritório",
    nf: "32191105570714000825550010059146621133082968",
    id_fornecedor: "5",
    id_usuario: "13",
    item: [
      {
        id_produto: 3,
        quantidade: 5,
      },
      {
        id_produto: 3,
        quantidade: 7,
      },
    ],
    createdAt: "2023-12-14T18:21:04.113Z",
    updatedAt: "2023-12-14T18:21:04.113Z",
  },
];

const Homepage = () => {
  return (
    <>
      <Navegacao />
      <h1>Bem vindo, {usuario.nome}</h1>
      <section>
        <p>Últimas saídas:</p>
        <Saida />

        <p>Últimas entradas:</p>
        {entradas.map((entrada) => (
          <Entrada key={entrada.id} entrada={entrada} entradaCompleta={false} />
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
