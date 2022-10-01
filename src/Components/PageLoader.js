import styled from "styled-components";
export default function PageLoader() {
    return (
        <Main>
            <Loader>
                <Box></Box>
                <Hill></Hill>
            </Loader>
        </Main>

    )
}

const Main = styled.div`
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
`
const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -2.7em;
    margin-left: -2.7em;
    width: 5.4em;
    height: 5.4em;
    background: #FB6B6B;
`
const Hill = styled.div`
    position: absolute;
    width: 7.1em;
    height: 7.1em;
    top: 1.7em;
    left: 1.7em;
    background-color: transparent;
    border-left: .25em solid whitesmoke;
    transform: rotate(45deg);
    &::after{
    content: '';
    position: absolute;
    width: 7.1em;
    height: 7.1em;
    left: 0;
    background: #FB6B6B;
    }

`
const Box = styled.div`
    position: absolute;
    left: 0;
    bottom: -.1em;
    width: 1em;
    height: 1em;
    background-color: transparent;
    border: .25em solid whitesmoke;
    border-radius: 15%;
    transform: translate(0, -1em) rotate(-45deg);
    animation: push 2.5s cubic-bezier(.79, 0, .47, .97) infinite;
    @keyframes push {
  0% {
    transform: translate(0, -1em) rotate(-45deg);
  }
  5% {
    transform: translate(0, -1em) rotate(-50deg);
  }
  20% {
    transform: translate(1em, -2em) rotate(47deg);
  }
  25% {
    transform: translate(1em, -2em) rotate(45deg);
  }
  30% {
    transform: translate(1em, -2em) rotate(40deg);
  }
  45% {
    transform: translate(2em, -3em) rotate(137deg);
  }
  50% {
    transform: translate(2em, -3em) rotate(135deg);
  }
  55% {
    transform: translate(2em, -3em) rotate(130deg);
  }
  70% {
    transform: translate(3em, -4em) rotate(217deg);
  }
  75% {
    transform: translate(3em, -4em) rotate(220deg);
  }
  100% {
    transform: translate(0, -1em) rotate(-225deg);
  }
}
 `

