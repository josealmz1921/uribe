import React from 'react';
import ReactHtmlParser from "react-html-parser";

const RowRigthContent = ({ data }) => {
    return (
        <>
            <br />
            <br />
            <h2 className="">{data.title && data.title}</h2>
            <div className='row-right-content'>
                <div className='images'>
                    {data.images && <img className='' src={data.images.url} alt='img.png' />}
                </div>
                <div className='content-siz'>
                    {data.content && ReactHtmlParser(data.content)}
                </div>
            </div>
        </>
    );
}

export default RowRigthContent;