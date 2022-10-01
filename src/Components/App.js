import GlobalStyled from "../assets/css/GlobalStyle";
import Cards from "../Components/Cards";
import styled from "styled-components";
import Header from "./Header";
import PageLoader from "./PageLoader";
import Home from "./Home";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
    const [homePage, setHomePage] = useState("visible");
    const [flashCardPage, setFlashCardPage] = useState(false);
    const [imagemRenderizada, setImagemRenderizada] = useState([]);

    function page() {
        if (homePage) {
            setHomePage("hidden");
            setFlashCardPage(true);
        }
    }
    return (
        <>
            <GlobalStyled />

            <ScreenContainer>

                <Home
                    page={page}
                    homePage={homePage}
                    flashCardPage={flashCardPage}
                />

                <PageLoader />

                <Header />

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
