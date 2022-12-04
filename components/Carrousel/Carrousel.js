import { useEffect,useState } from 'react';
import classes from './carrousel.module.css';
import { ChevronLeft, ChevronRight } from '../Layout/Icons';
import useCarrousel from "../../hooks/useCarrousel";


const Carrousel = ({items}) => {

    const { 
        nextItem,
        prevItem,
        position,
        change
     } = useCarrousel({items});

     const [data, setdata] = useState({
        image:null,
        text:null
    })

    useEffect(() => {
        setdata({
            image:items[position].Image.url,
            text:items[position].Texto
        })
        
    }, [position])

    return ( 
        <div style={{ backgroundImage: `url('${data.image}')`, opacity:`${ change ? '0' : '1'}` }} className={classes.root}>
            <button onClick={() => prevItem()} className={classes.btn_left}>
                <ChevronLeft />
            </button>
            <div className={classes.content}>
                { data.text && data.text.split(' ').map((text,i) => {
                    return <p key={i}>{text}</p>
                }) }
            </div>
            <button onClick={() => nextItem()} className={classes.btn_right}>
                <ChevronRight />
            </button>
        </div>
     );
}
 
export default Carrousel;