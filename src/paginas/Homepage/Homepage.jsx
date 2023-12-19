import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import Entrada from "../../componentes/Entrada/Entrada";
import Saida from "../../componentes/Saida/Saida";
import { EntradaService } from "../../serviços/API/modulos/EntradaService";
import { useEffect, useState } from "react";
import { SaidaService } from "../../serviços/API/modulos/SaidaService";
import { HomeBody, HomePageContainer, TituloColuna, EntradaColuna, SaidaColuna } from "./HomepageStyle";

function obterUltimosTresElementos(array) {

  if (array.length < 3) {
    return array;
  } else {

    return array.slice(array.length - 3);
  }
}


const Homepage = () => {
    const [entradas, setEntrada] = useState();
    const [saidas, setSaidas] = useState();
    const [erro, setErro] = useState();

    const entradaService = new EntradaService(setEntrada, setErro);
    const saidaService = new SaidaService(setSaidas, setErro)

    const nomeUsuario = localStorage.getItem("nome")
 
  useEffect(() => {
    saidaService.getSaidas();
    entradaService.getEntradas();
  }, []);

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
