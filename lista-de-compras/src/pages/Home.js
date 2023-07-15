import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Api from '../services/Api'
import Listas from '../components/Listas'


const Home = () => {
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
            console.error('Error fetching products:', error);
        }
    };

    const selecionarLista = (lista) => {
        setListaSelecionada(lista);
    };

    return <>        
        <div class="container">        
            <h2> Lista de Compras </h2>
            {listas.length < 5 && (
                <>
                    <Link to="./nova-lista">
                        <button className="w3-button w3-orange w3-round-xlarge"> Criar nova lista </button>
                    </Link>
                   
                </>
            )}  
            <Listas listas={listas} />                
        </div>
    </>
};
  
export default Home;