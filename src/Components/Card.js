import styled from "styled-components";
import { useState } from "react";
export default function Card({ perguntas, index }) {
    const [cartaoFechado, setCartaoFechado] = useState(true);
    const [mostrarPergunta, setMostrarPergunta] = useState(false);
    const [mostrarResposta, setMostrarResposta] = useState(false);
    function showTheQuestion(index) {
        setMostrarPergunta(true);
        setCartaoFechado(false);
        console.log(perguntas.Q, index)
    }
    function showTheAnswer(index) {
        console.log(perguntas.Q, index)
        setMostrarResposta(true);
        setMostrarPergunta(false);
        setCartaoFechado(false);
    }
    return (
        <>
            {cartaoFechado && <PerguntaFechada>
                {perguntas.pergunta}
                <img onClick={() => showTheQuestion(index)} src={perguntas.autoplay}
                    alt={perguntas.alt} />
            </PerguntaFechada>
            }

            {mostrarPergunta && <PerguntaAberta>
                <h1>{perguntas.Q}</h1>
                <img onClick={() => showTheAnswer(index)} src={perguntas.setinha}
                    alt={perguntas.alt} />
            </PerguntaAberta>
            }
            
            {mostrarResposta && <Resposta>
                <h1>{perguntas.R}</h1>
                <ContainerBotoes>
                    <BotaoVermelho>Não<br />lembrei!</BotaoVermelho>
                    <BotaoLaranja>Quase não<br /> lembrei!</BotaoLaranja>
                    <BotaoVerde>Zap!</BotaoVerde>
                </ContainerBotoes>
            </Resposta>
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
  display: ${props => props.cartaoFechado ? "none" : ""};
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
  display: ${props => props.mostrarResposta ? "none" : ""};
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
const Resposta = styled.div`
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
`
const ContainerBotoes = styled.span`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`
const BotaoVermelho = styled.button`
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #FF3030;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;

`
const BotaoLaranja = styled.button`
 width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #FF922E;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
`
const BotaoVerde = styled.button`
width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #2FBE34;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
`