import GlobalStyled from "../assets/css/GlobalStyle";
import Cards from "../Components/Cards";
import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function App() {

    return (
        <>
            <GlobalStyled />
            <ScreenContainer>

                <LogoContainer>
                    <img src={logo} alt="texto alternativo" />
                    <h1>ZappRecall</h1>
                </LogoContainer>

                <Cards />
         
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
