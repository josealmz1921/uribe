import classes from './presentation.module.css';

const Presentation = ({logo,text}) => {
    return (
        <div className={classes.root}>
            <div className="line"></div>

            <div className={classes.content}>
                <div className={classes.image}>
                    <img layout='fixed' src={logo.url} alt='logo.jpg' />
                </div>
                <div className="line-withe"></div>
                <div className={classes.text}>
                    <p>
                        {text}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Presentation;