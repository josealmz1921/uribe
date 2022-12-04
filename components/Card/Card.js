import Link from 'next/link';
import classes from './card.module.css';

const Card = ({ size, data, fullFilter }) => {
    return (
        <div className={`${classes.root} ${classes[size]} `}>
            <div className={classes.image}>
                <img src={data.image.url} alt='img' />
            </div>
            <div style={{ backgroundColor:data.filter_color }} className={fullFilter ? classes.fullFilter : classes.middleFilter}></div>
            <div className={` ${classes.content} ${classes[data.position_text]}`}>
                <div className={`${classes['contnet-url']}`}>
                    <p>{data.Title}</p>
                    <Link href={`${ data.service && !data.url && data.service.url ? `/servicio/${data.service.url}` : `/${data.url}`}`}>VER MAS</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;