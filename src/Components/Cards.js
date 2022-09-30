import Card from "./Card";
import perguntas from "../Components/questions";
export default function Cards(
    { setImagemRenderizada,
        imagemRenderizada
    }
) {

    return (
        <>
            {perguntas.map((item, i) =>
                <Card
                    setImagemRenderizada={setImagemRenderizada}
                    imagemRenderizada={imagemRenderizada}
                    perguntas={item}
                    index={i}
                    key={i} />)
            }
        </>
    )
}
