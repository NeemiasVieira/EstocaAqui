import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "../../paginas/Login/Login";
import React from "react";
import { Auth } from "./auth";
import Cadastro1 from "../../paginas/Cadastro/Cadastro1";
import Cadastro2 from "../../paginas/Cadastro/Cadastro2";
import Cadastro from "../../paginas/Cadastro/Cadastro";

export const RouterDOM = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Login />} path="/" />

        <Route
          path="/cadastro"
          element={<Cadastro />}
          children={[
            <Route path="1" element={<Cadastro1 />} />,
            <Route path="2" element={<Cadastro2 />} />,
          ]}
        />
      </Routes>
    </HashRouter>
  );
};
