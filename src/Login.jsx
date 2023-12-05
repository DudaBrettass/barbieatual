// Feito por Ana Lívia Gregório e Marya Eduarda Fernandes Brettas


import React, { useState } from 'react'
import myImage from './img/barbieflixlogoatual.png';

export const Login = ( props ) => {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const cond= (name.length > 0 && pass.length > 0)


  return (
    <div>
    <div>
    <img src={myImage} alt="BarbieFlix" style={{marginTop: '-70px', maxWidth: '100%'}} />
    </div>
    <div style={{height: '280px',
        width: '370px',
        borderRadius: '15%',
        backgroundColor: '#e22f8a',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        position: 'absolute',
        top: '50%', 
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: '30px',
        }}>

        <p style={{ color: '#ffe5ff', fontSize: '20px'}}><b>Nome:</b></p>
        <input style={{width: '250px', height: '25px'}} type="text" 
            onChange={({target:{value}}) => setName(value)}
            value={name}
            />
        <p style={{ color: '#ffe5ff', fontSize: '20px'}}><b>Senha:</b></p>
        <input style={{width: '250px', height: '25px'}} type="password" 
            onChange={({target:{value}}) => setPass(value)}
            value={pass}
            />
        <br/> <br/>
        <div style={{Display: 'flex'}}>
        <button style={{ marginRight: '10px', border: '2px solid #ef91c1', borderRadius: '10%', backgroundColor: '#b2006d', color: '#FFFF', fontSize: '20px'}}
        type="button" 
        disabled={ !cond }
        >
            Entrar
        </button>
        <button style={{border: '2px solid #ef91c1', borderRadius: '10%', backgroundColor: '#b2006d', color: '#FFFF', fontSize: '20px'}}
        type="button">Cadastre-se</button>
    </div>
    </div>
    </div>
  )
}
