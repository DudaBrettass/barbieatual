// Feito por Ana Lívia Gregório e Marya Eduarda Fernandes Brettas

import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { getItem, setItem } from '../services/LocalStorageFuncs' 
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ProductsArea } from '../css/style'
import { Header } from '../components/Header';
import myImage from '../img/barbieflixlogoatual.png';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #fdbefd;
  padding: 10px;
  max-width: 100vw;
 
`;
 
export const Principal = () => {

const[data, setData] = useState([]);
const[heart, setHeart] = useState( getItem('favoritos') || [])

const url = 'https://api-barbie-flix.vercel.app/filmess/'

useEffect(() => {

    axios.get(url)
    .then((response) => {setData(response.data)})

},[])

    const handleClick = (obj) => {
        const element = heart.find((e) => e.id === obj.id)
        if(element) {
            const arrFilter = heart.filter((e) => e.id !== obj.id)
            setHeart(arrFilter)
            setItem('favoritos',arrFilter)
        } else {
            setHeart([...heart,obj])
            setItem('favoritos', [...heart,obj])
        } 
    }

    

  return (

    <div style={{backgroundColor: '#fda2e9'}}>
    <Header />
    
    <div style={{ backgroundColor: '#fda2e9', 
    marginTop: '-70px', 
    justifyContent: 'space-between'}}>
    <img src={myImage} alt="BarbieFlix" style={{marginTop: '50px', maxWidth: '100%'}} />
    </div>
    
    <div>
        <ProductsArea>
            {
                data.map((e) => (
                    <div key={e.id}>
                        <h4>{e.nome}</h4>
                        
                        <Link to={`/filme/${e.id}`}>
                        
                        <img src={e.img} alt="Capa do Filme"
                        style={{ width: "200px", 
                        marginTop: '3px'}} />
                        
                        </Link>
                        
                        <button onClick={() => window.open('https://drive.google.com/drive/folders/1-yFkZrcyph8b1l4yrPpD7oaF5DHD7wss', '_blank')} 
                        style={{ marginTop:'10px', 
                        border: '2px solid #e02d88', 
                        borderRadius: '20px', 
                        backgroundColor: '#e02d88', 
                        color: '#FFFF', 
                        fontSize: '20px'}}>
                        Assistir
                        </button>
                        
                        <button style={{marginTop: '10px'}}
                            onClick={() => handleClick(e)}
                            >
                            {
                                heart.some((itemHeart) => itemHeart.id === e.id ) ? (
                                    <FaHeart />
                                ) : (
                                    <FaRegHeart />
                                )
                            }
                        </button>
                    </div>
                ))
            }
            </ProductsArea>
    </div>
    <Footer>
        <p style={{color: '#e02d88'}}>© 2023 BarbieFlix. Criado por Ana Lívia Gregório e Marya Eduarda Fernandes Brettas. Todos os direitos reservados.</p>
      </Footer>
    </div>
  )
}
