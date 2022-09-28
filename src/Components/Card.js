import styled from "styled-components";
import { useState } from "react";
export default function Card({ perguntas, index }) {
  const [cartaoFechado, setCartaoFechado] = useState(true);
  const [mostrarPergunta, setMostrarPergunta] = useState(false);
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [imagem, setImagem] = useState("");
  const [corVermelho, setCorVermelho] = useState(false);
  const [corLaranja, setCorLaranja] = useState(false);
  const [corVerde, setCorVerde] = useState(false);
  const [contador, setContador] = useState(0);
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
  function showCardAnswerRed() {
    const cartoesRespondidos = contador + 1;
    setMostrarResposta(false);
    setCorVermelho(true);
    setContador(cartoesRespondidos);
    setImagem(perguntas.erro);
    console.log("Clicado");
  }
  function showCardAnswerOrange() {
    const cartoesRespondidos = contador + 1;
    setMostrarResposta(false);
    setCorLaranja(true);
    setImagem(perguntas.quase);
    setContador(cartoesRespondidos);
  }
  function showCardAnswerGreen() {
    const imagemCerto = perguntas.certo;
    console.log(imagemCerto)
    const cartoesRespondidos = contador + 1;
    setMostrarResposta(false);
    setCorVerde(true);
    setImagem(imagemCerto);
    setContador(cartoesRespondidos);
  }
  return (
    <>
      {cartaoFechado &&
        <PerguntaFechada>
          <p>{perguntas.pergunta}</p>
          <img onClick={() => showTheQuestion(index)} src={perguntas.autoplay}
            alt={perguntas.alt} />
        </PerguntaFechada>
      }

      {mostrarPergunta &&
        <PerguntaAberta>
          <h1>{perguntas.Q}</h1>
          <img onClick={() => showTheAnswer(index)} src={perguntas.setinha}
            alt={perguntas.alt} />
        </PerguntaAberta>
      }

      {mostrarResposta &&
        <Resposta>
          <h1>{perguntas.R}</h1>
          <ContainerBotoes>
            <BotaoVermelho onClick={showCardAnswerRed}>Não<br />lembrei!</BotaoVermelho>
            <BotaoLaranja onClick={showCardAnswerOrange}>Quase não<br /> lembrei!</BotaoLaranja>
            <BotaoVerde onClick={showCardAnswerGreen}>Zap!</BotaoVerde>
          </ContainerBotoes>
        </Resposta>
      }

      {corVermelho &&
        <CartaoRespostaErrada>
          <p>{perguntas.pergunta}</p>
          <img src={perguntas.erro}
            alt={perguntas.alt} />
        </CartaoRespostaErrada>
      }

      {corLaranja &&
        <CartaoRespostaQuase>
          <p>{perguntas.pergunta}</p>
          <img src={perguntas.quase}
            alt={perguntas.alt} />
        </CartaoRespostaQuase>
      }

      {corVerde &&
        <CartaoRespostaCerto>
          <p>{perguntas.pergunta}</p>
          <img src={perguntas.certo}
            alt={perguntas.alt} />
        </CartaoRespostaCerto>
      }

      <Rodape>
        <p>{contador}/{index + 1} CONCLUÍDOS</p>
        <img src={imagem[index + 1]} alt={perguntas.alt} />
      </Rodape>

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
  color: ${props => props.corVermelho ? "red" : ""};
  background-color: white;
  text-decoration: ${props => props.corVermelho ? "line-through" : ""};
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
    background: #FFFFD5;
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
    background: #FFFFD5;
  }
`
const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 2px;
  padding: 15px;
  background: #FFFFD5;
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
  border: none;
  padding:5px;
  margin: 5px;
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
  border: none;
  padding:5px;
  margin: 5px;
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
  border: none;
  padding:5px;
  margin: 5px;
`
const CartaoRespostaErrada = styled.div`
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
  p{
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.corVermelho ? "black" : "#FF0000"};
  text-decoration: ${props => props.corVermelho ? "none" : "line-through"};
  background-color: #FFFFFF;
  }
  img{
    width:15px;
    height:15px;
    background-color: white;
    cursor: pointer;
  }
`
const CartaoRespostaQuase = styled.div`
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
  p{
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.corLaranja ? "black" : "#FF922E"};
  background-color: white;
  text-decoration: ${props => props.corLaranja ? "none" : "line-through"};
  }
  img{
    width:15px;
    height:15px;
    background-color: white;
    cursor: pointer;
  }
`
const CartaoRespostaCerto = styled.div`
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
  p{
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.corVerde ? "black" : "#2FBE34"};
  background-color: white;
  text-decoration: ${props => props.corVerde ? "none" : "line-through"};
  }
  img{
    width:15px;
    height:15px;
    background-color: white;
    cursor: pointer;
  }
`
const Rodape = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  p{
    font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  background-color:white;
  }
  img{
    width:15px;
    height:15px;
    background-color: white;
    cursor: pointer;
  }
`