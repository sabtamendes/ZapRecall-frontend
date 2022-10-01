import Card from "./Card";
import questions from "../Components/questions";
export default function Cards(
    { setRenderingFooterImage,
        renderingFooterImage
    }
) {

    return (
        <>
            {questions.map((item, i) =>
                <Card
                    setRenderingFooterImage={setRenderingFooterImage}
                    renderingFooterImage={renderingFooterImage}
                    questions={item}
                    index={i}
                    key={i} />)
            }
        </>
    )
}
