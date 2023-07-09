
import React, { useState, useEffect } from 'react';
import Api from '../services/Api'
import Card from './Card'

function ListaCards(props) {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        Api.get("https://localhost/data/produtos")
            .then((response) => setProdutos(response.data))
            .catch((err) => console.log(err))    
    },[])

    return (
        <section className="w3-row w3-container w3-margin-top">
            { produtos.map ( prod => 
            <Card key={prod.id} nome={prod.nome} 
                imagem= {prod.imagem} 
                preco={prod.preco}>
            </Card> )}
        </section>    
    )
    /*
    return produtos.map(prod => 
            <Card key={prod.id} titulo={prod.nome}>
                <h3>{prod.preco}</h3>
            </Card>)*/
}

export default ListaCards;