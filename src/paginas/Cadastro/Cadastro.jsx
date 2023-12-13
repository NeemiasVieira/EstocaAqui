import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { CadastroProvider } from "../../contextos/CadastroContext";
import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";

const Cadastro = () => {
  return (
    <CadastroProvider>
      <Navegacao />
       <Outlet />
      <Footer />
    </CadastroProvider>
  );
};

export default Cadastro;
