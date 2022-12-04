import Layout from "../components/Layout/Layout";
import { PhoneIcon } from "../components/Layout/Icons";
import ReactHTML from "react-html-parser";

const Contacto = ({ result }) => {

    const {
        schedule_col_2_time,
        schedule_col_1_time,
        phones,
        schedule_col_1_day,
        schedule_col_2_day,
        title_1,
        schedule_title,
        whatsapp,
        address,
        image,
        calemdar_icon,
        icon_map
    } = result

    return (
        <Layout>
            <div className="contact-content">
                <div className="image-content-contact">
                    <img src={image.url} alt="contact-image" />
                </div>
                <div className="info-content">
                    <div className="title-contact">
                        <h1>{title_1}</h1>
                    </div>
                    <div className="addres-content">
                        <div className="addres-content-icon">
                            <img src={icon_map.url} alt='map.png' />
                        </div>
                        <div style={{textAlign:'center'}}>
                            {ReactHTML(address)}
                        </div>
                    </div>
                    <div className="schedule-contact">
                        <div className="schedule-content">
                            <div className="schedule-icon">
                                <img src={calemdar_icon.url} alt='map.png' />
                            </div>
                            <div className="desc-schedule">
                                <p className="schedule-title">{schedule_title}</p>
                                <div className="schedule-container">
                                    <div className="schedule">
                                        <p>{schedule_col_1_day}</p>
                                        <p>{schedule_col_1_time}</p>
                                    </div>
                                    <div className="schedule">
                                        <p>{schedule_col_2_day}</p>
                                        <p>{schedule_col_2_time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="phones-contact">
                <div className="phones-contact-title">
                    <br />
                    <br />
                    <div className="line-thin"></div>
                    <br />
                    <br />
                    <p>CALL</p>
                    <div className="line-thin"></div>
                    <p>US</p>
                </div>
                <div className="phones-contact-details">
                    <p> <img src="/static/img/whatsapp.png" alt="whats-icon" /> {whatsapp} | <PhoneIcon classes='phones-contact-icon' /> {phones}</p>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {

    const url = `https://uribequiromasajes-dev.herokuapp.com/contacto`;
    const response = await fetch(url);
    const result = await response.json();

    return {
        props: {
            result
        }
    }
}

export default Contacto;