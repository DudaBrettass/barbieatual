// Feito por Ana Lívia Gregório e Marya Eduarda Fernandes Brettas

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderArea = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    background-color: rgba(178, 0, 109, 0.7);
    padding: 10px;
    margin-bottom: 70px;
    position: fixed;
    width: 100%;
    top: 0; 
    transition: top 0.3s;

    &.hidden {
        top: -100px;
    }

    a{
        text-decoration: none;
        color: #ffff;

        &:hover{
            text-decoration: underline;
        }

    }
`;

export const Header = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop){
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            setLastScrollTop(st <= 0 ? 0 : st);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);

    return (
        <HeaderArea className={isHidden ? "hidden" : ""}>
            <Link to="/">Principal ✿</Link>
            <Link to="/heart">Favoritos ❤</Link>
            <Link to="/info">Info ★</Link>
        </HeaderArea>
    )
}



