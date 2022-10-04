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
    const [isLoading, setIsLoading] = useState(false);
    const [renderingFooterImage, setRenderingFooterImage] = useState([]);

    function page() {
        if (homePage) {
            setHomePage("hidden");
        }
        spinner();
    }
    function spinner() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3800)
    }

    return (
        <>
            <GlobalStyled />

            <ScreenContainer>

                <Home
                    page={page}
                    homePage={homePage}
                    setIsLoading={setIsLoading}
                />

                <PageLoader
                    isLoading={isLoading} />

                <Header />

                <Cards
                    renderingFooterImage={renderingFooterImage}
                    setRenderingFooterImage={setRenderingFooterImage}
                />

                <Footer
                    renderingFooterImage={renderingFooterImage}
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
