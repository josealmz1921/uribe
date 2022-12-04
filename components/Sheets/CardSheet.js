import { useState, useEffect } from "react";
import reacthtml from 'react-html-parser';

const CardSheet = ({ data }) => {

    const [selected, setselected] = useState(0);
    const [selectValue, setselectValue] = useState(null);
    const [position, setposition] = useState(null)

    useEffect(() => {
        setselectValue(data.item[selected]);
        setposition(data.item[selected].position);
    }, [selected])

    return (
        <div>
            <div className="head-sheets">
                {data.item.map((item, i) => {
                    return (
                        <div key={i} onClick={() => { setselected(i) }} className={i === selected ? 'select' : ''}>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
            <div
                style={{
                    backgroundImage: `url( ${selectValue ? selectValue.image.url : ''})`,
                    width: '100%',
                    height: '80vh',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover'
                }}
            >
                {selectValue &&
                    <div
                    style={{ display:'flex',justifyContent:position }}
                    className="slider-content-fillers">
                        <div className="slider-item-fillers">
                            <p className="slider-item-title">{selectValue.name}</p>
                            <div className="slider-item-table slider-item-text">
                                {reacthtml(selectValue.data)}
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    );
}

export default CardSheet;