import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import FormNovaLista from './components/FormNovaLista'
import FormNovoProduto from './components/FormNovoProduto'
import Listas from './components/Listas'
import PesquisarMelhorLocalDeCompra from './pages/PesquisarMelhorLocalDeCompra';

export default function App (){
  const [listaSelecionada, setListaSelecionada] = useState(null);

  const selecionarLista = (lista) => {
    setListaSelecionada(lista);
  };
  return (
    <>   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>          
          <Route index element={<Home />} />         
          <Route path="nova-lista" element={<FormNovaLista />} />
          <Route path="listas" element={<Listas />} />
          <Route path="novo-produto" element={<FormNovoProduto listaSelecionada={listaSelecionada} />} />
          <Route path="pesquisar-melhor-local-de-compra" element={<PesquisarMelhorLocalDeCompra />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>    
  );  
}

