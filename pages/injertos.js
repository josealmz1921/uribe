import Layout from "../components/Layout/Layout";
import CardPresentation from "../components/CardPresentation";
import { CalendarIcon } from '../components/Layout/Icons';
import Link from 'next/link';

const Injertos = ({ result }) => {
    const { Presentation, Procesos, card_presentation_2, text_button } = result;
    return (
        <Layout>
            <CardPresentation data={Presentation} />
            <div className="line mt-5"></div>
            <div className="injertos">
                <h1 className="injertos-title">YOUR PROCESS</h1>
                <div className="injertos-rows">
                    {
                        Procesos.map((item, i) => {
                            return (
                                <div key={i} className="injertos-row">
                                    <div className="injertos-row-image">
                                        <div>
                                            <img src={item.image.url} alt={item.image.url} />
                                        </div>
                                        <div className="injertos-row-image-number">{i}</div>
                                    </div>
                                    <div>
                                        <p>{item.title}</p>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <CardPresentation data={card_presentation_2} />

            <Link href='/reservar'>
                <div className="button-calendar-injerto">
                    <CalendarIcon classes='calendar-icon' />
                    <p>{text_button}</p>
                </div>
            </Link>
        </Layout>
    );
}

export async function getStaticProps() {

    const url = `https://uribequiromasajes-dev.herokuapp.com/injertos`;
    const response = await fetch(url);
    const result = await response.json();

    return {
        props: {
            result
        }
    }
}

export default Injertos;