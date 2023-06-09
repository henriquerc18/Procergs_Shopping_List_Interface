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
    <div>
      <h1> Nova Lista </h1>
      {/*<ul>
        {listas.map(lista => (
          <li key={lista.id}>
            {lista.nome}
            
            
          </li>
        ))}        
        </ul>*/}
      
      <input
        type="text"
        value={newLista}
        onChange={(event) => setNewLista(event.target.value)}
      />
      <Link to="/">
        <button onClick={addLista} className="w3-button w3-orange w3-round-xlarge"> Salvar Lista </button>
      </Link>
    </div>
  );
};

export default FormNovaLista;

/*function FormNovaLista() {
  const [nome, setNome] = useState([]);
  const [listaNome, setListaNome] = useState('');
  const [produto, setProduto] = useState('');
  const [listaProdutos, setListaProdutos] = useState([]);

  const adicionarNomeLista = () => {
    if (nome.trim() !== ''){
      setListaNome([nome]);
      setNome('');
    }
  };

  const adicionarProduto = () => {
    if (produto.trim() !== '') {
      setListaProdutos([...listaProdutos, produto]);
      setProduto('');
    }
  };

  return (
    <div>
      <h1> Nova Lista </h1>
      <input
        type="text"
        placeholder="Digite o nome da lista"
        value={listaNome}
        onChange={(e) => setListaNome(e.target.value)}
      />
      <button onClick={adicionarNomeLista}> Criar lista </button>
      <h2>{listaNome}</h2>
      <ul>
        {listaProdutos.map((produto, index) => (
          <li key={index}>{produto}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Digite um produto"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
      />
      <button onClick={adicionarProduto}>Adicionar Produto</button>
    </div>
  );
}

export default FormNovaLista;


function FormNovaLista(props){
    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}*/

/*
const FormNovaLista = ({ onSubmit }) => {
    const [nome, setNome] = useState('');
  
    const handleChange = (event) => {
      setNome(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(nome);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={handleChange} />
        </label>
        <button type="submit">Salvar</button>
      </form>
    );
};

function FormNovaLista() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormNovaLista />);

export default FormNovaLista;*/