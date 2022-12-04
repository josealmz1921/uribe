import { useState,useEffect } from "react";
import useSlider from './useSlider';

const useCarrousel = ({items}) => {
    
    const longitud = items.length;
    const [change, setchange] = useState(false)

    const { offset, setOffset } = useSlider({
        total:  longitud,
        enabled: true,
        useLoaded: false,
        speed: 10000
      });

    const nextItem = () => {
        
        let newPositiion = offset + 1;
        if(newPositiion >= longitud) return;
        setchange(true)
        setTimeout(() => {
            setchange(false)
        }, 700);
        setTimeout(() => {
            setOffset(newPositiion);
        }, 100);
    }

    const prevItem = () => {
        
        let newPositiion = offset - 1;
        if(newPositiion < 0) return;
        setchange(true)
        setTimeout(() => {
            setchange(false)
        }, 600);
        setTimeout(() => {
            setOffset(newPositiion);
        }, 100);
    }

    useEffect(() => {
      
        setchange(true)
        setTimeout(() => {
            setchange(false)
        }, 700);

    }, [offset])
    

    return{
        longitud,
        nextItem,
        prevItem,
        position:offset,
        change
    }

}
 
export default useCarrousel;