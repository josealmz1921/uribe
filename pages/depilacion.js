import Layout from "../components/Layout/Layout";
import Link from 'next/link'
import { CameraIcon } from "../components/Layout/Icons";
import CardPriceProduct from "../components/CardPriceProduct";
import ReacParseHtml from 'react-html-parser';
import { CalendarIcon } from "../components/Layout/Icons";

const Depilacion = ({ result }) => {

    const { 
        image_1, 
        url_video, 
        image_circle_1, 
        image_circle_2, 
        image_circle_3, 
        producto_card, 
        image_circles_background,
        text_button,
        question,
        bottom_text,
        icon_question
     } = result;

    return (
        <Layout>
            <div
                style={{
                    backgroundImage: `url('${image_1.url}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                className="depilacion-page-presentation">
                <Link href={url_video}><a target="_blank" className="depilacion-page-enlace">{text_button} <CameraIcon classes='depilacion-icon' /> </a></Link>
            </div>
            <br />
            <div className="line"></div>
            <div style={{
                backgroundImage: `url('${image_circles_background.url}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'bottom'
            }} className="card-depilation">
                <div className="image-card-depilacion-container">
                    <div className="image-card-depilacion">
                        <img src={image_circle_1.url} alt='image.jpg' />
                    </div>
                    <div className="image-card-depilacion">
                        <img src={image_circle_2.url} alt='image.jpg' />
                    </div>
                    <div className="image-card-depilacion">
                        <img src={image_circle_3.url} alt='image.jpg' />
                    </div>
                </div>
            </div>
            <div className="services-depilation">
                {producto_card.map((item,i) => {
                    if(i === 3) return null;
                    return <CardPriceProduct key={i} data={item} />
                })}
            </div>
            <div className="services-depilation">
                <CardPriceProduct data={producto_card[3]} />
                <div className="question_depilation">
                    <div className="question_depilation_content">
                        <div className="question_depilation_content_text">
                            {ReacParseHtml(question)}
                        </div>
                        <div className="question_depilation_bottom">
                            <CalendarIcon  classes='calendar-icon'/>
                            {ReacParseHtml(bottom_text)}
                        </div>
                        <div className="bottom_image">
                            <img src={icon_question.url} alt='man-muscle.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {

    const url = `https://uribequiromasajes-dev.herokuapp.com/depilacion`;
    const response = await fetch(url);
    const result = await response.json();

    return {
        props: {
            result
        }
    }
}

export default Depilacion;