import Layout from "../components/Layout/Layout";
import ReactHTML from 'react-html-parser'

const TerminosCondiciones = ({ result }) => {
    return (
        <Layout>
            <div style={{ padding: '2rem' }}>
                {ReactHTML(result.text)}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {

    const url = `https://uribequiromasajes-dev.herokuapp.com/terminos-y-condiciones`;
    const response = await fetch(url);
    const result = await response.json();

    return {
        props: {
            result
        }
    }
}

export default TerminosCondiciones;