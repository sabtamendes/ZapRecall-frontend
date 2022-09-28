import autoplay from "../assets/img/seta_play.png";
import setinha from "../assets/img/seta_virar.png";
import erro from "../assets/img/icone_erro.png";
import certo from "../assets/img/icone_certo.png";
import quase from "../assets/img/icone_quase.png";
const questions =
    [
        {
            pergunta: "Pergunta 1",
            autoplay: autoplay,
            alt: "texto alternativo",
            Q: "O que é JSX?",
            setinha,
            R: "Uma extensão de linguagem do JavaScript",
            erro,
            certo,
            quase
        },
        {
            pergunta: "Pergunta 2",
            autoplay: autoplay,
            alt: "texto alternativo",
            Q: "O React é __",
            setinha,
            R: "uma biblioteca JavaScript para construção de interfaces",
            erro,
            certo,
            quase
        },
        {
            pergunta: "Pergunta 3",
            autoplay: autoplay,
            alt: "texto alternativo",
            Q: "Componentes devem iniciar com __ ",
            setinha,
            R: "letra maiúscula",
            erro,
            certo,
            quase
        },
        {
            pergunta: "Pergunta 4",
            autoplay: autoplay,
            alt: "texto alternativo",
            Q: "Podemos colocar __ dentro do JSX",
            setinha,
            R: "expressões",
            erro,
            certo,
            quase
        }
    ];
export default questions;