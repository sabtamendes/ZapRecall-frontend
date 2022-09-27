import styled from "styled-components";

export default function FlashCard(props) {
    const { autoplay, question, alt } = props;
    console.log(props)
    return (
        <Card>
            {question}
            <img src={autoplay} alt={alt} />
        </Card>
    )
}

const Card = styled.div`
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