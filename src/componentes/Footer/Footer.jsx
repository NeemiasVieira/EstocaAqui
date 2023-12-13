import { FooterStyle } from "./FooterStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <div className="footer-content">
          <div className="Intro">
            <h3>Projeto realizado pelos estagiários</h3>
            <p>Em busca de um controle de estoque imbatível</p>
            <img src="https://modalgr.com.br/wp-content/themes/modal/images/_logo.png" alt="Logo ModalGR"></img>
          </div>
          <div className="footer-section">
            <h3>Integrantes do Grupo</h3>
            <p>
              Diogo Asenjo <br/> Neemias Vieira <br/> Gabriel Leandro
            </p>
          </div>
          <div className="footer-section">
            <h3>Informações de Contato</h3>
            <p>e-mail: neemias.fernandes@modalgr.com.br</p>
            <p>Telefone: +55 (13) 99602-0483</p>
            <p>Rua Visconde de Rio Branco 2, Centro - Santos/SP</p>
          </div>
          <div className="footer-section footerServices">
            <h3>Serviços</h3>
            <ul>
              <li>
                <a href="./">Controle de estoque</a>
              </li>
              <li>
                <a href="https://estoca-aqui-api-git-main-neemiasvieira.vercel.app/">Documentação da API</a>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-media-icons">
              <a href="./">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/neemiasvieira/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5513996020483&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href="https://www.linkedin.com/in/neemiasvieira/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/NeemiasVieira" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyrights">
          &copy; 2024 EstocaAqui - Todos os direitos reservados.
        </p>
      </div>
    </FooterStyle>
  );
};