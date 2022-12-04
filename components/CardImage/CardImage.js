import classes from './cardImage.module.css';

const CardImage = ({data}) => {

    console.log(data);

    if(!data) return null

    return (
        <div className={classes.root}>
            <div className={classes.image}>
                { data.Image && <img src={data.Image.url} alt='card-image.jpg' />}
            </div>
            <div className={`${classes.containerText} ${classes[data.position_text]}`}>
                <div className={`${classes.content}`}>
                    <p>{data.Title_simple}</p>
                    <p>{data.Title_Cursive}</p>
                </div>
            </div>
        </div>
    );
}

export default CardImage;