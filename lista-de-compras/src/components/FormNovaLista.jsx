import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Api from '../services/Api'
import Home from '../pages/Home'


const FormNovaLista = () => {
  const [listas, setListas] = useState([]);
  const [newLista, setNewLista] = useState('');
  const [listaSelecionada, setListaSelecionada] = useState(null);
  const [deleteListaId, setDeleteListaId] = useState('');
  

  /*useEffect(() => {
    fetchListas();
  }, []);

  const fetchListas = async () => {
    try {
      const response = await Api.get('http://localhost:4200/listas');
      setListas(response.data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };*/

  const addLista = async () => {
    try {
      const response = await Api.post('http://localhost:4200/listas', { nome: newLista });
      
      setListas([...listas, response.data]);
      setNewLista('');
      
    } catch (error) {
      console.error('Error adding list:', error);
    }
    
  };

 /*const deleteLista = async (listaId) => {
    try {
      /*const response = await Api.delete(`http://localhost:4200/listas/${listaId}`);
      console.log('Lista excluída:', response.data);
      await Api.delete(`http://localhost:4200/listas/${listaId}`);
      setListas(listas.filter((lista) => lista.id !== listaId));
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  const selecionarLista = (lista) => {
    setListaSelecionada(lista);
  };*/

  return (
    <div class="container"> 
      <h2> Nova Lista </h2><br/>
      {/*<ul>
        {listas.map(lista => (
          <li key={lista.id}>
            {lista.nome}
            
            
          </li>
        ))}        
        </ul>*/}
      
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