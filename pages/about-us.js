import Layout from "../components/Layout/Layout";
import CardPresentation from "../components/CardPresentation";
import TitleLine from "../components/Layout/TitleLine";
import Presentation from '../components/Presentation';
import RHTM from 'react-html-parser'

const AboutUs = ({ result }) => {

    const {
        Presentation: dataPresentation,
        about_us_text,
        about_us_logo,
        doctor_description,
        doctor_name,
        doctor_image
    } = result;

    return (
        <Layout>
            <CardPresentation data={dataPresentation} />
            <Presentation logo={about_us_logo} text={about_us_text} />
            <TitleLine />
            <div className="about-us-content">
                <div className="div-content conten-30">
                    <div className="image-content">
                        <div>
                            <img src={doctor_image.url} alt='about-us.jpg' />
                        </div>
                    </div>
                    <p className="image-content-text">{doctor_name}</p>
                </div>
                <div className="div-content content-70">
                    <div className="description-about-us">
                        {RHTM(doctor_description)}
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </Layout>
    );
}

export async function getStaticProps() {

    const url = `https://uribequiromasajes-dev.herokuapp.com/about-us`;
    const response = await fetch(url);
    const result = await response.json();

    return {
        props: {
            result
        }
    }
}


export default AboutUs;