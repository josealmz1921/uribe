import Layout from '../components/Layout/Layout'
import CardPresentation from "../components/CardPresentation";
import Card from '../components/Card';


const Corporales = ({ result }) => {

    const { image,service,Presentation } = result;

    console.log(image);

    return (
        <Layout>
            <CardPresentation data={Presentation} />
            <div>
                <CardPresentation />
            </div>
            <h1 className='full-title'>TRATAMINETOS</h1>
            <div>
                <div className='order-cards'>
                    {
                        service.map((cards, i) => {
                            return (
                                <Card key={i} fullFilter={false} data={cards} size={cards.size} />
                            )
                        })
                    }
                </div>
            </div>
            <div className='full-image'>
                <img src={image.formats.medium.url} alt='image-corporales.jpg' />
            </div>
        </Layout>
    );
}

export async function getStaticProps() {

    const url = `https://uribequiromasajes-dev.herokuapp.com/corporales`;
    const response = await fetch(url);
    const result = await response.json();

    return {
        props: {
            result
        }
    }
}

export default Corporales;