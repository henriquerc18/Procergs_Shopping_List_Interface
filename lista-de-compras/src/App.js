import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from "./pages/NoPage";
import FormNovaLista from './components/FormNovaLista'
import ListaCards from './components/ListaCards'
import PesquisarMelhorLocalDeCompra from './pages/PesquisarMelhorLocalDeCompra';

export default function App (){
  return (
    <>
    <ListaCards></ListaCards>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />         
          <Route path="lista-cards" element={<ListaCards />} />
          <Route path="nova-lista" element={<FormNovaLista />} />
          <Route path="pesquisar-melhor-local-de-compra" element={<PesquisarMelhorLocalDeCompra />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
  
}

