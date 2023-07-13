import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Api from '../services/Api'

const Listas = () => {
  const [listas, setListas] = useState([]);
  const [listaSelecionada, setListaSelecionada] = useState(null);
  

  useEffect(() => {
    fetchListas();
  }, []);

  const fetchListas = async () => {
    try {
      const response = await Api.get('http://localhost:4200/listas');
      setListas(response.data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };

  const deleteLista = async (listaId) => {
    try {
      /*const response = await Api.delete(`http://localhost:4200/listas/${listaId}`);
      console.log('Lista excluída:', response.data);*/
      await Api.delete(`http://localhost:4200/listas/${listaId}`);
      setListas(listas.filter((lista) => lista.id !== listaId));
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };
  
  const selecionarLista = async (listaId) => {
    try {
      const response = await Api.get(`http://localhost:4200/listas/${listaId}`);
      setListaSelecionada(response.data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };

return (
    <>
        {/*<Link to="/novo-produto">*/}
            <div>
                <ul>
                    {listas.map(lista => (
                    <li key={lista.id} onClick={() => selecionarLista(lista)}>
                        {lista.nome} 
                        <button onClick={() => deleteLista(lista.id)} className="w3-button w3-red w3-round-xlarge"> Excluir Lista </button>          
                    <Link to="/novo-produto">
                      <button className="w3-button w3-blue w3-round-xlarge"  onClick={() => selecionarLista(lista)}> Selecionar Lista </button>
                    </Link>
                    </li>
                    ))}        
                </ul>
            </div>
        {/*</Link>*/}
    </>
  );

  /*return (
    <>
      <div className="d-flex align-items-center">
        {listas.map((lista) => (
          <div key={lista.id} className="mr-2">
            <ul>
              <li>
                {lista.nome}
                <button onClick={() => deleteLista(lista.id)} className="w3-button w3-red w3-round-xlarge">
                  Excluir Lista
                </button>
                <button className="w3-button w3-blue w3-round-xlarge">
                  Selecionar
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );*/

};

export default Listas;

