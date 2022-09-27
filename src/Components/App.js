
import GlobalStyle from "../assets/css/GlobalStyle";
import styled from "styled-components";

import logo from "../assets/img/logo.png";
import Autoplay from "../assets/img/play-outline-icon.svg";

import FlashCard from "./FlashCard";
const perguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"];
const autoplayIcon = [Autoplay]
export default function App() {
    return (
        <>
            <Header>
                <img src={logo} alt="texto alternativo" />
                <span>ZappRecall</span>
            </Header>

            <Main>

                <FlashCard
                    question={perguntas[0]}
                    autoplay={autoplayIcon[0]}
                        alt="texto alternativo"
                />

                <FlashCard
                    question={perguntas[1]}
                    autoplay={autoplayIcon[0]}
                    alt="texto alternativo"
                />

                <FlashCard
                    question={perguntas[2]}
                    autoplay={autoplayIcon[0]}
                    alt="texto alternativo"
                />

                <FlashCard
                    question={perguntas[3]}
                    autoplay={autoplayIcon[0]}
                    alt="texto alternativo"
                />

            </Main>
            
            <Footer>
                <button>Não <br />lembrei!</button>
                <button>Quase não <br />lembrei!</button>
                <button>Zap!</button>
                <p>0/4 CONCLUÍDOS</p>
            </Footer>

            <GlobalStyle />
        </>
    )
}
const Header = styled.div`
    position: fixed;
    height: 80px;
    top: 55px;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    background-color: var(--cor-fundo); 
    font-family: "Righteous", cursive;
    font-size: 36px;
    color: white;
`
const Main = styled.div`
    margin-bottom:50px;
`


const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 70px;
    padding: 14px 10px;
    position: fixed;
    text-align: center;
    /* display:flex; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
    gap: 20px;
    button{
    width: 100%;
    height: 40px;
    background-color: green; /* fazer props */
    color: #FFFFFF;
    font-family: cursive;
    font-size: 14px;
    font-weight: 700;
    border-radius: 4px;
    line-height:14px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    p{
    font-family: cursive;
    font-size: 18px;
    line-height: 100%;
    vertical-align: Top;
    color: Solid #333333;
    background-color: white;    
    }
`