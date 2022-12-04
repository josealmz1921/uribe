import Layout from "../components/Layout/Layout";
import CardPresentation from "../components/CardPresentation";
import CardPrice from "../components/CardPrice";
import Card from "../components/Card/Card";
import CardSheet from "../components/Sheets/CardSheet";

const Fillers = ({result}) => {
    const { Presentation, content_1, content_2, image_content_1, image_content_2, services, filler_sheets } = result;

    return (
        <Layout>
            <CardPresentation data={Presentation} />
            <CardSheet data={filler_sheets} />
            <div className="fillers-tow-cards">
                <CardPrice image={image_content_1} data={content_1} />
                <CardPrice image={image_content_2} data={content_2} />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}>
                {
                    services.map((cards, i) => {
                        return (
                            <Card key={i} fullFilter={false} data={cards} size={cards.size} />
                        )
                    })
                }
            </div>
        </Layout>
    );
}

export async function getStaticProps() {

    const url = `https://uribequiromasajes-dev.herokuapp.com/fillers`;
    const response = await fetch(url);
    const result = await response.json();

    return {
        props: {
            result
        }
    }
}


export default Fillers;