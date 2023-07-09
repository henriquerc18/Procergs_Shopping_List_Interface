import React, { useState } from 'react';

/*const Formulario = ({ onSubmit }) => {
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
};*/

/*const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Faça algo com os dados do formulário
    console.log(formulario);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={formulario.nome}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Telefone:
        <input
          type="text"
          name="telefone"
          value={formulario.telefone}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};*/

export default Formulario;
