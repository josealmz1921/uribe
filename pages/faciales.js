
import Layout from "../components/Layout/Layout";
import CardPresentation from "../components/CardPresentation";
import CardPriceProduct from "../components/CardPriceProduct";

const Faciales = ({ result }) => {

    const { cards, list_colums, products } = result;

    console.log(result);
    return (
        <Layout>
            <CardPresentation />
            <div className="container-beneficios">
                <h1>Beneficios</h1>
                <div className="content-beneficios">
                    {cards.map((item,i) => {
                        return (
                            <div key={i} className="beneficio">
                                <div>
                                    <img src={item.image.url} alt={item.image.url} />
                                </div>
                                <p>{item.description}s</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="list-of-benefits">
                <p className="list-of-benefits-footer">AESTETICS ROOM</p>
                <h2>lista de tratamientos</h2>
                <div className="content-benefits">
                    <div>
                        <ul>
                            {list_colums.map((list,i) => {
                                return list.position === 'left' && <li key={i}> <p>{list.text}</p> </li>
                            })
                            }
                        </ul>
                    </div>
                    <div>
                        <ul>
                            {list_colums.map((list,i) => {
                                return list.position !== 'left' && <li key={i}> <p>{list.text}</p> </li>
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="serivices">
                {
                    products.map((cards, i) => {
                        return (
                            <CardPriceProduct key={i} fullFilter={false} data={cards} />
                        )
                    }) 
                }
            </div>
        </Layout>
    );
}

export async function getStaticProps() {

    const url = `https://uribequiromasajes-dev.herokuapp.com/faciales`;
    const response = await fetch(url);
    const result = await response.json();

    return {
        props: {
            result
        }
    }
}

export default Faciales;