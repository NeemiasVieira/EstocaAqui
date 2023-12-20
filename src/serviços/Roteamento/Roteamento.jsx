import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "../../paginas/Login/Login";
import React from "react";
import Auth from "./auth";
import Cadastro1 from "../../paginas/Cadastro/Cadastro1";
import Cadastro2 from "../../paginas/Cadastro/Cadastro2";
import Cadastro from "../../paginas/Cadastro/Cadastro";
import Homepage from "../../paginas/Homepage/Homepage";
import Cadastro3 from "../../paginas/Cadastro/Cadastro3";
import Cadastro4 from "../../paginas/Cadastro/Cadastro4";
import Cadastro5 from "../../paginas/Cadastro/Cadastro5";
import Cadastro6 from "../../paginas/Cadastro/Cadastro6";
import Cadastro7 from "../../paginas/Cadastro/Cadastro7";
import PaginaInicial from "../../paginas/PaginaInicial/PaginaInicial";
import Produtos from "../../paginas/Produtos/Produtos";
import ManterAutenticado from "./ManterAutenticado";


export const RouterDOM = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<PaginaInicial />} path="/" />
        <Route element={<ManterAutenticado><Login key={2}/></ManterAutenticado>} path="/login"/>
        <Route element={<Auth><Produtos key={1}/></Auth>} path="/produtos"/>

        <Route
          path="/cadastro"
          element={<Cadastro />}
          children={[
            <Route path="1" element={<Cadastro1 />} />,
            <Route path="2" element={<Cadastro2 />} />,
            <Route path="3" element={<Cadastro3/>} />,
            <Route path="4" element={<Cadastro4/>} />,
            <Route path="5" element={<Cadastro5/>} />,
            <Route path="6" element={<Cadastro6/>} />,
            <Route path="7" element={<Cadastro7/>} />,
          ]}
        />

        <Route path="/homepage" element={<Auth><Homepage/></Auth>} />
      </Routes>
    </HashRouter>
  );
};
