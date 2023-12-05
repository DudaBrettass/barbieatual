// Feito por Ana Lívia Gregório e Marya Eduarda Fernandes Brettas


import styled from "styled-components";

export const ProductsArea = styled.div`
    display: flex;
    gap: 150px; 
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    backgound-color: #ffe5ff;
    maxWidth: 100%;

    div{
        height: 460px;
        width: 280px;
        border: 2px solid #e02d88;
        border-radius: 5%;
        background-color: #ffe5ff;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        

        button{
            font-size: 22px;
            background: transparent;
            border: none;
            color: #e02d88;
        }
    }
    h1{
        color: #b2006d;
    }
    h4 {
        font-size: 15px;
        color: #b2006d;
    }
    h5 {
        font-size: 9px;
        color: #b2006d;
    }
    `;