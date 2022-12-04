import classes from './cardPrice.module.css';
import ReactHtmlParser from 'react-html-parser';

const CardPrice = ({data,image}) => {
    return (
        <div
        style={{
            background:`url('${image.url}')`,
            backgroundPosition:'center center',
            backgroundSize:'cover'
        }}
        className={classes.root}>
            <div className={`${classes.content} ${classes['slider-item-table']}`}>
               {ReactHtmlParser(data)}
               <br/>
                <p className={classes.price}>$4,500.00</p>
            </div>
        </div>
    );
}

export default CardPrice;