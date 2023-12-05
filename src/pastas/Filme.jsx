// Feito por Ana Lívia Gregório e Marya Eduarda Fernandes Brettas

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Filme = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    console.log(id);
    axios.get(`https://api-barbie-flix.vercel.app/filmess/${id}`)
      .then((response) => {
        console.log(response.data[0]);
        setFilme(response.data[0]);
      })
      .catch((error) => {
        console.error('Erro ao obter detalhes do filme:', error);
      });
  }, [id]);

  if (!filme) {
    return <div>Carregando...</div>;
  } else{
    
      return (
        <div style={{  gap: '70px',
         display: 'flex',  
         marginLeft: '70px', 
         marginRight: '70px', 
         marginTop: '50px'}}>
          
          <div>
          
          <img style={{width: '350px'}} 
          src={filme ? filme.img : ''} 
          alt={`Capa do Filme ${filme ? filme.nome : ''}`} />
          </div>
          
          <div style={{ textAlign: 'left',
        display: "flex",}}>
          
          <h1 style={{ fontSize: '35px', 
          color: '#b2006d'}}>
            {filme.nome}</h1>
          
          <p style={{ fontStyle: 'italic',
          fontSize: '18px', 
          color: '#b2006d'}}>
          {filme.duracao}</p>
          
          <p style={{  fontSize: '17px', 
          color: '#b2006d'}}>{filme.descricao}</p>
          
          <button onClick={() => window.open('https://drive.google.com/drive/folders/1-yFkZrcyph8b1l4yrPpD7oaF5DHD7wss', '_blank')} 
           style={{ border: '7px solid #b2006d', 
           borderRadius: '20px', 
           backgroundColor: '#b2006d', 
           color: '#FFFF', 
           fontSize: '25px'}}>
          Assistir
          </button>
          
          <Link to="/">
                <button
                 style={{marginLeft: '15px', 
                 border: '7px solid #b2006d', 
                 borderRadius: '20px', 
                 backgroundColor: '#b2006d', 
                 color: '#FFFF', 
                 fontSize: '23px'}}>
                ⮨</button>
            </Link>
          </div>
        </div>
      );

  }
};


