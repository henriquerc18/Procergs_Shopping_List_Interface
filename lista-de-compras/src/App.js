import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import NovaLista from './pages/NovaLista'
import NoPage from "./pages/NoPage";
import CriarNovaLista from './components/CriarNovaLista'
import Voltar from './components/Voltar'
import FormNovaLista from './components/FormNovaLista'
import HiMessage from './components/HiMessage'
import Card from './components/Card'
import ListaCards from './components/ListaCards'
import PesquisarMelhorLocalDeCompra from './pages/PesquisarMelhorLocalDeCompra';
import TelaResultado from './components/TelaResultado';

export default function App (){
  return (
    <>
    <ListaCards></ListaCards>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />         
          <Route path="lista-cards" element={<ListaCards />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="nova-lista" element={<FormNovaLista />} />
          <Route path="pesquisar-melhor-local-de-compra" element={<PesquisarMelhorLocalDeCompra />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
  
}

