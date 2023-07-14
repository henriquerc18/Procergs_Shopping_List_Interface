import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Api from '../services/Api'

const Listas = () => {
  //const history = useHistory();
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

  const selecionarLista = (lista) => {
    setListaSelecionada(lista);
  };
  
  /*const selecionarLista = async (lista) => {
    setListaSelecionada(lista);
    history.push(`/novo-produto/${lista.nome}`);
    /*try {
      const response = await Api.get(`http://localhost:4200/listas/${listaId}`);
      setListaSelecionada(response.data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };*/

return (
    <>
        {/*<Link to="/novo-produto">*/}
          <div>
            <ul>
                {listas.map(lista => (
                <li key={lista.id}>
                    {lista.nome} 
                    <button onClick={() => deleteLista(lista.id)} className="w3-button w3-red w3-round-xlarge"> Excluir Lista </button>          
                <Link to={`/novo-produto/${lista.id}`}>
                    <button className="w3-button w3-blue w3-round-xlarge" onClick={() => selecionarLista(lista)}> Selecionar Lista </button>
                </Link>   
                </li>
                ))}        
            </ul>
          </div>
        {/*</Link>*/}
    </>
  );

};

export default Listas;

