// Em um novo arquivo, por exemplo, StateContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AtualizarPaginaContext = createContext();

export const AtualizarPaginaProvider = ({ children }) => {
    
    const [atualizaPag, setAtualizaPag] = useState(false);
  
    const atualizarPagina = () => {
      setAtualizaPag(!atualizaPag);
    };

  return (
    <AtualizarPaginaContext.Provider value={{ atualizarPagina }}>
      {children}
    </AtualizarPaginaContext.Provider>
  );
};

export const useAtualizarPagina = () => {
  const context = useContext(AtualizarPaginaContext);
  if (!context) {
    throw new Error('useAtualizarPagina deve ser usado dentro de um AtualizarPaginaProvider');
  }
  return context;
};
