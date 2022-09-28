import Card from "./Card";
import autoplay from "../assets/img/play-outline-icon.svg";
const perguntas =
    [
        { pergunta: "Pergunta 1", autoplay: autoplay, alt: "texto alternativo" },
        { pergunta: "Pergunta 2", autoplay: autoplay, alt: "texto alternativo" },
        { pergunta: "Pergunta 3", autoplay: autoplay, alt: "texto alternativo" },
        { pergunta: "Pergunta 4", autoplay: autoplay, alt: "texto alternativo" }
    ];


export default function Cards() {
    function clicar() {
        console.log("fui clicado")
    }
    return (
        <>
            {perguntas.map((item, i) => <Card perguntas={item} clicar={(item)=>clicar(item)} key={i} />)}
        </>
    )
}

