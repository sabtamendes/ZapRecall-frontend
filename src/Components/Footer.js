import styled from "styled-components";
import questions from "./questions";
export default function Footer({ renderingFooterImage}){
    return(
        <Baseboard>
              <p>{renderingFooterImage.length}/{questions.length} CONCLUÍDOS</p>
              <div>
                {renderingFooterImage.map((item, i) => <img key={i} src={item} alt={questions.alt} />)}
              </div>
            </Baseboard>
    )
}

const Baseboard = styled.div`
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
  div{
    display:flex;
  }
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
  span{
    width:28%;
  }
`