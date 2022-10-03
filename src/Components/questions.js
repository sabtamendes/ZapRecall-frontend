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
            Q: "O React é _",
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
            Q: "Componentes devem iniciar com _ ",
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
            Q: "Podemos colocar _ dentro do JSX",
            setinha,
            R: "expressões",
            erro,
            certo,
            quase
        },
        {
            pergunta: "Pergunta 5",
            autoplay: autoplay,
            alt: "texto alternativo",
            Q: "O ReactDOM nos ajuda _",
            setinha,
            R: "interagindo com a DOM para colocar componentes React na mesma",
            erro,
            certo,
            quase
        },
        {
            pergunta: "Pergunta 6",
            autoplay: autoplay,
            alt: "texto alternativo",
            Q: "Usamos o npm para _",
            setinha,
            R: "gerenciar os pacotes necessários e suas dependências",
            erro,
            certo,
            quase
        },
        {
            pergunta: "Pergunta 7",
            autoplay: autoplay,
            alt: "texto alternativo",
            Q: "Usamos props para _",
            setinha,
            R: "passar diferentes informações para componentes",
            erro,
            certo,
            quase
        },
        {
            pergunta: "Pergunta 8",
            autoplay: autoplay,
            alt: "texto alternativo",
            Q: "Usamos estado (state) para _",
            setinha,
            R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            erro,
            certo,
            quase
        }
    ];
export default questions;


