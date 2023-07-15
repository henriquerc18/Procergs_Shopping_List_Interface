import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Api from '../services/Api'
import Home from '../pages/Home'


const FormNovaLista = () => {
  const [listas, setListas] = useState([]);
  const [newLista, setNewLista] = useState('');
  const [listaSelecionada, setListaSelecionada] = useState(null);
  const [deleteListaId, setDeleteListaId] = useState('');

  const addLista = async () => {
    try {
      const response = await Api.post('http://localhost:4200/listas', { nome: newLista });
      
      setListas([...listas, response.data]);
      setNewLista('');
      
    } catch (error) {
      console.error('Error adding list:', error);
    }
    
  };

  return (
    <div class="container"> 
      <h2> Nova Lista </h2><br/>
      
      <input className="w3-round-xlarge"
        type="text"
        value={newLista}
        onChange={(event) => setNewLista(event.target.value)}
      /><br/>
      <Link to="/">
        <button onClick={addLista} className="w3-button w3-orange w3-round-xlarge"> Salvar Lista </button>
      </Link>
    </div>
  );
};

export default FormNovaLista;