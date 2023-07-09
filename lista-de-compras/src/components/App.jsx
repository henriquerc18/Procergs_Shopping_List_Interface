import React, { useState } from 'react';
import Formulario from './Formulario';
import TelaResultado from './TelaResultado';

const App = () => {
  const [nomeSalvo, setNomeSalvo] = useState('');

  const handleFormSubmit = (nome) => {
    setNomeSalvo(nome);
  };

  return (
    <div>
      <h1>Meu Formulário</h1>
      <Formulario onSubmit={handleFormSubmit} />
      {nomeSalvo && <TelaResultado nome={nomeSalvo} />}
    </div>
  );
};

export default App;
