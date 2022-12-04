import Layout from "../../components/Layout/Layout";
import FullContent from '../../components/Layout/FullContent';
import RowLeftContent from '../../components/Layout/RowLeftContent';
import RowRigthContent from '../../components/Layout/RowRigthContent';
import CardPresentation from "../../components/CardPresentation";
import CardPriceProduct from "../../components/CardPriceProduct";


const Servicio = ({ result }) => {

    if ( !result || !result[0]) return null;

    const data = result[0];

    const { Content } = data;

    return (
        <Layout>
            {Content && Content.map((item,i) => {

                if(item.__component === 'list-colums.list-products'){
                    return <div key={i} className="serivices">
                    {
                    item.Product_content.map((cards, i) => {
                        return (
                            <CardPriceProduct key={i} fullFilter={false} data={cards} size='basis33' />
                        )
                    }) 
                }</div>
                }

                if(item.__component === 'cards.simple-card'){
                    return <CardPresentation key={i} data={item} />
                }

                if (item.__component === 'dinamics.left-content') {
                    return <RowLeftContent key={i} data={item} />
                }

                if (item.__component === 'dinamics.right-content') {
                    return <RowRigthContent key={i} data={item} />
                }

                return (
                    <FullContent key={i} data={item} />
                )

            })}
        </Layout>
    );
}

export async function getStaticPaths() {

    const url = `https://uribequiromasajes-dev.herokuapp.com/services`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();

    const paths = entradas.map(services => ({ params: { id: services.url } }));

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({params:{id}}) {

    const url = `https://uribequiromasajes-dev.herokuapp.com/services?url=${id}`;
    const response = await fetch(url);
    const result = await response.json();

    return {
        props: {
            result
        }
    }
}

export default Servicio;