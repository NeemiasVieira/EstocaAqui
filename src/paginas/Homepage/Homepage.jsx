import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import Entrada from "../../componentes/Entrada/Entrada";
import Saida from "../../componentes/Saida/Saida";
import { EntradaService } from "../../serviços/API/modulos/EntradaService";
import { useEffect, useState } from "react";
import { SaidaService } from "../../serviços/API/modulos/SaidaService";
import { HomeBody, HomePageContainer, TituloColuna, EntradaColuna, SaidaColuna } from "./HomepageStyle";

const usuario = {
  nome: "Diogo",
  email: "dioguinho",
  outrasPropriedades: "desnecessárias",
};

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
      <HomeBody>
        <h1>Bem vindo, {usuario.nome}</h1>
        <HomePageContainer>
            <EntradaColuna>
                    <TituloColuna>Últimas entradas:</TituloColuna>
                    {entradas &&
                    entradas.map((entrada) => (
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
                saidas.map((saida) =>(
                <Saida
                    key={saida.id}
                    saida={saida}
                    saidaCompleta={false}
                />
                ))}
            </SaidaColuna>
        </HomePageContainer>
      </HomeBody>
      <button>Estoque</button>
      <button>Entradas</button>
      <button>Saídas</button>
      <Footer />
    </>
  );
};

export default Homepage;
