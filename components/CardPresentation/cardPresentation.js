import classes from './cardPresentation.module.css';

const CardPresentation = ({ data }) => {
    if (!data) return null;
    const { Image, Title_Cursive, Title_simple, position_text } = data;
    return (
        <div
            className={classes.root}
            style={{
                backgroundImage: `url('${Image.url}')`,
            }}
        >
            <div className={`${classes.content} ${classes[position_text]}`}>
                <div>
                    {Title_simple && Title_simple.length > 0 && <p className={classes.first}>{Title_simple}</p>}
                    {Title_Cursive && Title_Cursive.length > 0 && <p className={classes.second}>{Title_Cursive}</p>}
                </div>
            </div>
        </div>
    );
}

export default CardPresentation;