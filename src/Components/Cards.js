import Card from "./Card";

import perguntas from "../Components/questions";
export default function Cards() {
   
    return (
        <>
            {perguntas.map((item, i) => <Card perguntas={item} index={i} key={i} />)}
        </>
    )
}
