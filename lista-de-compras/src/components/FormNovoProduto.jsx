import React, { useState, useEffect } from 'react';
import Api from '../services/Api'
import Home from '../pages/Home'
import Listas from './Listas'

const FormNovoProduto = ({ listaSelecionada }) => {
  const [produtos, setProdutos] = useState([]);
  const [newProduto, setNewProduto] = useState('');
  const [deleteProdutoId, setDeleteProdutoId] = useState('');

  useEffect(() => {
    if (listaSelecionada) {
      fetchProdutos();
    }
  }, [listaSelecionada]);

  const fetchProdutos = async () => {
    try {
      const response = await Api.get(`http://localhost:4200/listas/${listaSelecionada.id}`);
      setProdutos(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduto = async () => {
    try {
      const response = await Api.post(`http://localhost:4200/listas/${listaSelecionada.id}/produtos`, {
        id: generateProductId(),
        nome: newProduto,
      });
      setProdutos([...produtos, response.data]);
      setNewProduto('');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  const deleteProduto = async (produtoId) => {
    try {
      await Api.delete(`http://localhost:4200/listas/${listaSelecionada.id}/produtos/${produtoId}`);
      setProdutos(produtos.filter(produto => produto.id !== produtoId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const generateProductId = () => {
    // Gerar um ID único para o novo produto (pode ser um número aleatório ou outra lógica)
    return Math.floor(Math.random() * 1000);
  };

  return (
    /*<div>
      <h1> Produtos da lista {listaSelecionada && listaSelecionada.nome} </h1>
      
      <ul>
        {produtos.map(produto => (
          <li key={produto.produtoId}>
            {produto.nome}
            <button onClick={() => deleteProduto(produto.produtoId)}> Excluir Produto </button>
          </li>
        ))}        
      </ul>
      
      <input
        type="text"
        value={newProduto}
        onChange={event => setNewProduto(event.target.value)}
      />
      <button onClick={addProduto}> Adicionar Produto </button>
            
    </div>*/
    <div>
      {listaSelecionada ? (
        <div>
          <h1>Produtos da lista {listaSelecionada.nome}</h1>

          <ul>
            {produtos.map(produto => (
              <li key={produto.id}>
                {produto.nome}
                <button onClick={() => deleteProduto(produto.id)}>Excluir Produto</button>
              </li>
            ))}
          </ul>

          <input
            type="text"
            value={newProduto}
            onChange={event => setNewProduto(event.target.value)}
          />
          <button onClick={addProduto}>Adicionar Produto</button>
        </div>
      ) : (
        <h1>Nenhuma lista selecionada</h1>
      )}
    </div>
  )
};

export default FormNovoProduto;

