import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import Entrada from "../../componentes/Entrada/Entrada";
import Saida from "../../componentes/Saida/Saida";
import { EntradaService } from "../../serviços/API/modulos/EntradaService";
import { useEffect, useState } from "react";
import { SaidaService } from "../../serviços/API/modulos/SaidaService";
import { HomeBody, HomePageContainer, TituloColuna, EntradaColuna, SaidaColuna } from "./HomepageStyle";
import Chart from "react-google-charts";
import { ProdutoService } from "../../serviços/API/modulos/ProdutoService";
import Produto from "../../componentes/Produto/Produto";




function obterUltimosTresElementos(array) {
  // Verifica se o argumento é um array
  if (!Array.isArray(array)) {
    console.error('O argumento não é um array.');
    return array;
  }

  if (array.length < 3) {
    console.log('Array com menos de 3');
    return [...array]; // Retorna uma cópia real do array original
  } else {
    console.log('Array com 3 ou mais elementos');
    return array.slice(array.length - 3);
  }
}

const Homepage = () => {
    const [entradas, setEntradas] = useState();
    const [saidas, setSaidas] = useState();
//    const [produtos, setProdutos] = useState();
    const [erro, setErro] = useState();
//    const [data, setData] = useState([])

    const entradaService = new EntradaService(setEntradas, setErro);
    const saidaService = new SaidaService(setSaidas, setErro);
//    const produtoService = new ProdutoService(setProdutos, setErro);

    const nomeUsuario = localStorage.getItem("nome");
 
  useEffect(() => {
    saidaService.getSaidas();
    entradaService.getEntradas();
 //   produtoService.getProdutos();
  }, []);


/*


  const options = {
    colors: ['#02A21A', '#A20000']
  }


  useEffect(() => {

    if (produtos) {
      const estoque = produtos.map((produto) => ({ quantidade: produto.quantidade }));

      const totalQuantidade = estoque.reduce((acumulador, produto) => acumulador + produto.quantidade, 0);

      const entrada = entradas.map((entrada) => ({ quantidade: entrada.item.quantidade }));

      setData([['Produto', 'Quantidade'], ['Estoque', totalQuantidade], ['Entrada', entrada]]);
      
      }
     
    }, [produtos]);



    html/css/elemento

         {data.length > 1 && <Chart
          chartType="BarChart"
          data={data}
          options={options}
          width="100%"
          height="400px"
          legendToggle
        />} 
*/


  return (
    <>
      <Navegacao />
      <HomeBody>
        <h1>Bem vindo, {nomeUsuario}</h1>
        <HomePageContainer>
            <EntradaColuna>
                    <TituloColuna>Últimas entradas:</TituloColuna>
                    {entradas &&
                    obterUltimosTresElementos(entradas).map((entrada) => (
                        <Entrada
                        key={entrada.id}
                        entrada={entrada}
                        entradaCompleta={false}
                        />
                    ))}
            </EntradaColuna>
            <SaidaColuna>
                <TituloColuna>Últimas saídas:</TituloColuna>
                {saidas &&
                obterUltimosTresElementos(saidas).map((saida) => (
                <Saida
                    key={saida.id}
                    saida={saida}
                    saidaCompleta={false}
                />
                ))}
            </SaidaColuna>
        </HomePageContainer>
      </HomeBody>
      <Footer />
    </>
  );
};

export default Homepage;
