import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Api from '../services/Api'


const Listas = () => {
  //const history = useHistory();
  const [listas, setListas] = useState([]);
  const [listaSelecionada, setListaSelecionada] = useState(null);
  const [editingListId, setEditingListId] = useState(null);
  //const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const [editListName, setEditListName] = useState('');
  

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
      if (listaSelecionada && listaSelecionada.id === listaId) {
        setListaSelecionada(null);
      }
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  /*const selecionarLista = (lista) => {
    setListaSelecionada(lista);
    setRedirect(true);
    //setListaSelecionada(lista);
    //history.push(`/novo-produto/${lista.id}`);
    //window.location.href = `/novo-produto/${lista.id}`;
  };*/

  const startEditingList = (listaId, listaNome) => {
    setEditingListId(listaId);
    setEditListName(listaNome);
  };

  const updateListName = async (listaId, novoNome) => {
    try {
      await Api.put(`http://localhost:4200/listas/${listaId}`, { nome: novoNome });
      setListas((prevListas) =>
        prevListas.map((lista) => {
          if (lista.id === listaId) {
            return { ...lista, nome: novoNome };
          }
          return lista;
        })
      );
      setEditingListId(null);
    } catch (error) {
      console.error('Error updating list name:', error);
    }
  };

  const navigateToFormNovoProduto = (listaId) => {
    // Redirecionar para a rota "/novo-produto/:listaId"
    navigate(`/novo-produto/${listaId}`);
  };

  /*if (redirect) {
    return <Redirect to={`/novo-produto/${listaSelecionada && listaSelecionada.id}`} />;
  }*/
  
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
       
          <div class="container">
            <h2>
                {listas.map(lista => (
                  <h3 key={lista.id}>
                    {editingListId === lista.id ? (
                <>
                  <input className="w3-round-xlarge"
                    type="text"
                    value={editListName}
                    onChange={(event) => setEditListName(event.target.value)}
                  />
                  <button onClick={() => updateListName(lista.id, editListName)} className="w3-button w3-orange w3-round-xlarge w3-small"> Salvar </button>
                </>  
                    ) : (
                    <>
                    {lista.nome} 
                    <button onClick={() => startEditingList(lista.id, lista.nome)} className="w3-button w3-gray w3-round-xlarge w3-small"> Editar </button>   
                  
                  <Link to={`/novo-produto/${lista.id}`}>
                    <button onClick={() => navigateToFormNovoProduto(lista.id)} className="w3-button w3-green w3-round-xlarge w3-small"> Abrir </button>
                  </Link>                  
                  
                    <button onClick={() => deleteLista(lista.id)} className="w3-button w3-red w3-round-xlarge w3-small"> Excluir </button> 
                 </>)} </h3>
                ))}        
            </h2>
          </div>        
    </>
  );

};

export default Listas;