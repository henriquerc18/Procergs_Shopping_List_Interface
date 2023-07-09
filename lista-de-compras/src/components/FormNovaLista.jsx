import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function FormNovaLista() {
  const [listaNome, setListaNome] = useState('');
  const [produto, setProduto] = useState('');
  const [listaProdutos, setListaProdutos] = useState([]);

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
      <button onClick={adicionarProduto}> Criar lista </button>
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


/*function FormNovaLista(props){
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