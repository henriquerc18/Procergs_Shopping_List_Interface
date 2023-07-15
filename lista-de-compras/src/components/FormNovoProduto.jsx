import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../services/Api'
import Home from '../pages/Home'
import Listas from './Listas'

const FormNovoProduto = () => {
  const { listaId } = useParams();
  const [listaSelecionada, setListaSelecionada] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [newProduto, setNewProduto] = useState('');
  const [deleteProdutoId, setDeleteProdutoId] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await Api.get(`http://localhost:4200/listas/${listaId}`);
        setListaSelecionada(response.data);
        setProdutos(response.data.produtos);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProdutos();
  }, [listaId]);

  const addProduto = async () => {
    try {
      const response = await Api.post(`http://localhost:4200/listas/${listaId}/produtos`, {
        id: generateProductId(),
        nome: newProduto,
      });
      setProdutos([...produtos, response.data]);
      setNewProduto('');
    } catch (error) {
      setError('Erro ao adicionar produto');
      console.error('Erro ao adicionar produto:', error);
    }
  };

  const deleteProduto = async (produtoId) => {
    try {
      await Api.delete(`http://localhost:4200/listas/${listaId}/produtos/${produtoId}`);
      setProdutos(produtos.filter((produto) => produto.id !== produtoId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const generateProductId = () => {
    return Math.floor(Math.random() * 1000);
  };

  return (
    <div class="container">
      <h2> {listaSelecionada && listaSelecionada.nome}</h2>
      {produtos && produtos.length > 0 ? (
        <ul>
          {produtos.map(produto => (
            <li key={produto.id}>
              {produto.nome}
              <button onClick={() => deleteProduto(produto.id)}>Excluir Produto</button>
            </li>
          ))}
        </ul>
      ) : ( 
        <p>Nenhum produto encontrado.</p>
      )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <input className="w3-round-xlarge"
          type="text"
          value={newProduto}
          onChange={event => setNewProduto(event.target.value)}
        /><br/>
        <button onClick={addProduto} className="w3-button w3-orange w3-round-xlarge">Adicionar Produto</button>
    </div>
  );
};

export default FormNovoProduto;