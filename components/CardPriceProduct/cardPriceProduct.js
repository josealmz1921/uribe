import Link from "next/link";

const CardPriceProduct = ({ data }) => {
    if (!data) return null
    const { discount_rate, image, name, price, sesions } = data;
    return (
        <div className="serivice">
            <div className="serivice-image">
                <img src={image.url} alt="facial.jpeg" />
                {sesions && <p className="services-depilation-sesions">{sesions} sesiones</p>}
            </div>
            <div>
                <div className="serviceInformationTitle">
                    <p>{name} {discount_rate && discount_rate > 0 && `- ${discount_rate}%`} </p>
                </div>
                <div className="serviceInformation">
                    <div className="price-items-content">
                        <p>$ {price.toLocaleString('es-MX', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</p>
                        {discount_rate && discount_rate > 0 && <p>$ {(price - ((discount_rate * price) / 100)).toLocaleString('es-MX', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</p>}
                    </div>
                    <div className="serviceInformationButton">
                        <Link href='/reservar'>
                            <p>Agendar cita</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPriceProduct;