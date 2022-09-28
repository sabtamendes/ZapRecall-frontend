import styled from "styled-components";

export default function Card({perguntas, clicar}) {
    return (
        <FlashCard>
            {perguntas.pergunta}
            <img onClick={clicar} src={perguntas.autoplay} alt={perguntas.alt} />
        </FlashCard>
    )
}

const FlashCard = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 10px 10px;
    cursor: pointer;
    img{
    background-color: white;
    color: var(--preto);
    width: 23px;
    height: 23px;
    }
`