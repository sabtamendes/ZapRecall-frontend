import styled from "styled-components";
import { useState } from "react";

export default function Card({ questions, setRenderingFooterImage, renderingFooterImage }) {
  const [closedCard, setClosedCard] = useState(true);
  const [cardQuestion, setCardQuestion] = useState(false);
  const [answerCard, setAnswerCard] = useState(false);
  const [colorRed, setColorRed] = useState(false);
  const [colorOrange, setColorOrange] = useState(false);
  const [colorGreen, setColorGreen] = useState(false);

  function showTheQuestion() {
    setCardQuestion(true);
    setClosedCard(false);
  }

  function showTheAnswer() {
    setAnswerCard(true);
    setCardQuestion(false);
    setClosedCard(false);
  }

  function showCardAnswerRed(image) {
    const redImage = image;
    setRenderingFooterImage([...renderingFooterImage, redImage]);
    setAnswerCard(false);
    setColorRed(true);
  }

  function showCardAnswerOrange(image) {
    const orangeImage = image;
    setRenderingFooterImage([...renderingFooterImage, orangeImage]);
    setAnswerCard(false);
    setColorOrange(true);

  }

  function showCardAnswerGreen(image) {
    const greenImage = image;
    setRenderingFooterImage([...renderingFooterImage, greenImage])
    setAnswerCard(false);
    setColorGreen(true);
  }

  return (
    <>
      {closedCard &&
        <ClosedQuestion>
          <p>{questions.pergunta}</p>
          <img onClick={showTheQuestion} src={questions.autoplay}
            alt={questions.alt} />
        </ClosedQuestion>
      }

      {cardQuestion &&
        <OpeningQuestion>
          <h1>{questions.Q}</h1>
          <img onClick={showTheAnswer} src={questions.setinha}
            alt={questions.alt} />
        </OpeningQuestion>
      }

      {answerCard &&
        <Answer>
          <h1>{questions.R}</h1>
          <ContainerBotoes>
            <RedButton onClick={() => showCardAnswerRed(questions.erro)}>Não<br />lembrei!</RedButton>
            <OrangeButton onClick={() => showCardAnswerOrange(questions.quase)}>Quase não<br /> lembrei!</OrangeButton>
            <GreenButton onClick={() => showCardAnswerGreen(questions.certo)}>Zap!</GreenButton>
          </ContainerBotoes>
        </Answer>
      }

      {colorRed &&
        <WrongAnswerCard>
          <p>{questions.pergunta}</p>
          <img src={questions.erro}
            alt={questions.alt} />
        </WrongAnswerCard>
      }

      {colorOrange &&
        <AlmostAnswerCard>
          <p>{questions.pergunta}</p>
          <img src={questions.quase}
            alt={questions.alt} />
        </AlmostAnswerCard>
      }

      {colorGreen &&
        <RightAnswerCard>
          <p>{questions.pergunta}</p>
          <img src={questions.certo}
            alt={questions.alt} />
        </RightAnswerCard>
      }
    </>
  )
}

const ClosedQuestion = styled.div`
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
  display: ${props => props.closedCard ? "none" : ""};
  p{
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.colorRed ? "red" : ""};
  background-color: white;
  text-decoration: ${props => props.colorRed ? "line-through" : ""};
  }
  img{
    width:15px;
    height:15px;
    background-color: white;
    cursor: pointer;
  }
`
const OpeningQuestion = styled.div`
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
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: ${props => props.answerCard ? "none" : ""};
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
const Answer = styled.div`
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
  font-size: 16px;
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
const RedButton = styled.button`
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
const OrangeButton = styled.button`
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
const GreenButton = styled.button`
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
const WrongAnswerCard = styled.div`
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
  color: ${props => props.colorRed ? "black" : "#FF0000"};
  text-decoration: ${props => props.colorRed ? "none" : "line-through"};
  background-color: #FFFFFF;
  }
  img{
    width:15px;
    height:15px;
    background-color: white;
    cursor: pointer;
  }
`
const AlmostAnswerCard = styled.div`
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
  color: ${props => props.colorOrange ? "black" : "#FF922E"};
  background-color: white;
  text-decoration: ${props => props.colorOrange ? "none" : "line-through"};
  }
  img{
    width:15px;
    height:15px;
    background-color: white;
    cursor: pointer;
  }
`
const RightAnswerCard = styled.div`
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
  color: ${props => props.colorGreen ? "black" : "#2FBE34"};
  background-color: white;
  text-decoration: ${props => props.colorGreen ? "none" : "line-through"};
  }
  img{
    width:15px;
    height:15px;
    background-color: white;
    cursor: pointer;
  }
`
