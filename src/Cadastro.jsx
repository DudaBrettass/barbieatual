// Feito por Ana Lívia Gregório e Marya Eduarda Fernandes Brettas


import React, { useState } from 'react'
import { setItem } from './services/LocalStorageFuncs'
import { useHistory } from 'react-router-dom';
import myImage from './img/barbieflixlogoatual.png';

export const Cadastro = ( props ) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const cond= (name.length > 1 && email.length > 3 && pass.length > 3)

    const saveUser = (name, email, pass) => {
        setItem('usuario',{name, email, pass})
       }

       const history = useHistory();
       const salvarButtonClick = () => {
       saveUser(name, email, pass);
       history.push('/');
    }
    const cancelarButtonClick = () => {
        saveUser(name, email, pass);
        history.push('/');
     };;


  return (
    <div>
    <div>
    <img src={myImage} alt="BarbieFlix" style={{marginTop: '-27px', width: '370px', maxWidth: '100%'}} />
    </div>
    <div style={{height: '400px',
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
        marginTop: '30px'
        }}>

        <p style={{ color: '#ffe5ff', fontSize: '20px'}}><b>Nome:</b></p>
            <input style={{width: '250px', height: '25px'}} type="text" 
            onChange={({target:{value}}) => setName(value)}
            value={name}
            />
        <p style={{ color: '#ffe5ff', fontSize: '20px'}}><b>E-mail:</b></p>
        <input style={{width: '250px', height: '25px'}} type="text" 
            onChange={({target:{value}}) => setEmail(value)}
            value={email}
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
        onClick={salvarButtonClick}
        disabled={ !cond }
        >
            Salvar
        </button>
        <button style={{ marginRight: '10px', border: '2px solid #ef91c1', borderRadius: '10%', backgroundColor: '#b2006d', color: '#FFFF', fontSize: '20px'}}
        type="button" 
        onClick={cancelarButtonClick}
        >
            Cancelar
        </button>
    </div>
    </div>
    </div>
  )
}
