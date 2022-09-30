import styled from "styled-components";
import logo from "../assets/img/logo.png";
export default function Home({ page, homePage }) {

    return (
        <LandingPage homePage={homePage} onClick={() => page()}>
            <img src={logo} alt="texto alternativo" />
            <h1>ZapRecall</h1>
            <button>Iniciar Recall!</button>
        </LandingPage>
    )
}

const LandingPage = styled.div`
    visibility: ${props => props.homePage === "visible" ? "visible" : "hidden"};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 30%;
    flex-direction: column;
    justify-content: center;

    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    bottom:0;
    background: #FB6B6B;

    img{
        width: 150px;
        height: 161px;
        margin-top:-200px;
        margin-bottom: 35px;
    }

    h1{
    font-family:'Righteous';
    font-size: 36px;
    line-height: 45px;
    vertical-align: center;
    letter-spacing: -1.2%;
    color: #FFFFFF;
    margin-bottom: 35px;
    }

    button{
        width:246px;
        height:54px;
        font-family: 'recursive';
        font-size:18px;
        line-height:22px;

        padding: 10px;
        border-radius: 5px;
        border-color:  #D70900;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        color: #D70900;
    }
`