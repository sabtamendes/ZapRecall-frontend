import styled from "styled-components";
import { useState } from "react";
export default function Card({ perguntas, index }) {
    const [mostrarPergunta, setMostrarPergunta] = useState(false);
    function showTheQuestion(index) {
        setMostrarPergunta(true)
        console.log(perguntas.Q, index)
    }
    return (
        <>
            {mostrarPergunta
                ? <PerguntaAberta>
                    <h1>{perguntas.Q}</h1>
                    <img src={perguntas.setinha} alt={perguntas.alt} />
                </PerguntaAberta>

                : <PerguntaFechada>
                    {perguntas.pergunta}
                    <img onClick={() => showTheQuestion(index)} src={perguntas.autoplay} alt={perguntas.alt} />
                </PerguntaFechada>
            }
        </>
    )
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  background-color: #FFFFFF;
  border-radius: 5px;
  display: ${props => props.mostrarPergunta ? "none" : ""};
  p{
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  background-color: white;
  }
  img{
    width:15px;
    height:15px;
    background-color: white;
    cursor: pointer;
  }
`
const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1{
    background-color:white;
  }
  img{
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: white;
  }
  `