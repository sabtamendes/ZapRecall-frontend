import GlobalStyled from "../assets/css/GlobalStyle";
import Cards from "../Components/Cards";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
    const [imagemRenderizada, setImagemRenderizada] = useState([]);
   
    return (
        <>
            <GlobalStyled />
            <ScreenContainer>

                <LogoContainer>
                    <img src={logo} alt="texto alternativo" />
                    <h1>ZappRecall</h1>
                </LogoContainer>

                <Cards
                    imagemRenderizada={imagemRenderizada}
                    setImagemRenderizada={setImagemRenderizada}
                />

                <Footer
                    imagemRenderizada={imagemRenderizada}
                />

            </ScreenContainer>
        </>
    )
}

const LogoContainer = styled.div`
 display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
 h1{
 font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
 }
 img{
    width: 52px;
 }
`
const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
