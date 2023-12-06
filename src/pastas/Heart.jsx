// Feito por Ana Lívia Gregório e Marya Eduarda Fernandes Brettas

import React, {useState} from 'react'
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { FaHeart } from 'react-icons/fa'
import { ProductsArea } from '../css/style'
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #fdbefd;
  text-align: center;
  width: 100%;
  margin-bottom: 0px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
 

export const Heart = () => {
    const [data, setData] = useState( getItem('favoritos') || [])

    const removeItem = (obj) =>{
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('favoritos', arrFilter)
    }
    
    
  return (
    <div style={{backgroundColor: '#fda2e9'}}>
        <Header/>
    
    <div style={{ marginTop: '80px'}}>
    <h1 style={{ color: '#e22f8a'}}>Meus filmes favoritos</h1> 
    <FaHeart style= {{fontSize: '30px', 
    color: '#e02d88'}}/>
    </div>
    
    <div  style={{ marginTop: '80px'}}>
        <ProductsArea>
            {
                data.map((e) => (
                <div key={e.id}>

                    <h4>{e.nome}</h4>
                    
                    <Link to={`/filme/${e.id}`}>
                    
                    <img src={e.img} alt="Capa do Filme"
                    style={{ width: "200px", 
                    marginTop: '3px'}} /></Link>
                    
                    <h4 style={{marginTop: '3px'}}>{e.duracao}</h4>
                        
                        <button onClick={() => window.open('https://youtu.be/SazCwj9yeUQ', '_blank')} 
                        style={{ marginTop:'-10px', 
                        border: '2px solid #e02d88', 
                        borderRadius: '20px', 
                        backgroundColor: '#e02d88', 
                        color: '#FFFF', 
                        fontSize: '20px'}}>
                        Assistir
                        </button>
                    
                    <button 
                    style={{marginTop: '10px'}}
                    onClick={() => removeItem(e)}
                    >
                        <FaHeart/>
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
