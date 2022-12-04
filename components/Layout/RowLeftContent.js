import React from 'react';
import ReactHtmlParser from "react-html-parser";

const RowLeftContent = ({data}) => {

    return (
        <>
            <br />
            <br />
            <h2 className="font-semibold text-3xl text-center">{data.title && data.title}</h2>
            <div className='row-left-content'>
                <div className='images'>
                    { data.images && <img className='max-w-full rounded-md' src={data.images.url} alt='img.png' /> }
                </div>
                <div className='content content-size'>
                    {data.content && ReactHtmlParser(data.content)}
                </div>
            </div>
        </>
    );
}

export default RowLeftContent;