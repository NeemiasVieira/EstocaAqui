import React from "react";
import { PaginaInicialStyle } from "./PaginaInicialStyle";
import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faShieldHalved, faPaintRoller, faCheck} from "@fortawesome/free-solid-svg-icons";


const PaginaInicial = () => {
  return (
    <>
      <Navegacao />
      <PaginaInicialStyle>
        <section className="BoasVindas">
          <div className="BoasVindasDiv">
            <h1>Bem-vindo ao EstocaAqui</h1>
            <p>A sua solução completa para gestão de estoque.</p>
          </div>
          <div className="imagens">
            <img src="https://th.bing.com/th/id/OIG.tMrg4.r.Z8bL_V3SA36m?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logotipo" />
            <img src="https://th.bing.com/th/id/OIG.tkoihjNKBXNqhteoSADp?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logotipo"></img>
          </div>
        </section>

        <div className="ConteudoPrincipal">
        <section className="recursos">
          <h2>Recursos em Destaque</h2>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} />Controle de entradas e saídas</li>
            <li><FontAwesomeIcon icon={faCheck} />Cadastramento de funcionários</li>
            <li><FontAwesomeIcon icon={faCheck} />Praticidade no seu controle</li>
            <li><FontAwesomeIcon icon={faCheck} />Segurança</li>
          </ul>
        </section>

        <section className="vantagens">
          <h2>Nossas Vantagens</h2>
          <div className="vantagem">
          <FontAwesomeIcon icon={faLightbulb} className="Lampada"/>
            <div className="descricaoVantagem">
            <h3>Fácil de Usar</h3>
            <p>Interface intuitiva para uma experiência sem complicações.</p>
            </div>
          </div>
          <div className="vantagem">
          <FontAwesomeIcon icon={faPaintRoller} className="Rolo"/>
          <div className="descricaoVantagem">
            <h3>Personalização</h3>
            <p>Personalize conforme a sua preferência, colocando imagens de perfil, banner da empresa e logotipo.</p>
            </div>
          </div>
          <div className="vantagem">
          <FontAwesomeIcon icon={faShieldHalved} className="Escudo" />
          <div className="descricaoVantagem">
            <h3>Segurança Garantida</h3>
            <p>Todos os dados do seu negócio estão assegurados por nós.</p>
            </div>
          </div>
        </section>
        </div>

        <section className="comeceAgora">
          <h2>Experimente o EstocaAqui hoje mesmo</h2>
          <p>
            Transforme a gestão do seu estoque. Otimize, simplifique e alcance
            o próximo nível.
          </p>
          <button>Começar Agora</button>
        </section>
      </PaginaInicialStyle>
      <Footer />
    </>
  );
};

export default PaginaInicial;
