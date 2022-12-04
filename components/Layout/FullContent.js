import React from 'react';
import ReactHtmlParser from "react-html-parser";

const FullContent = ({ data }) => {
    return (
        <>
            <br />
            <br />
            <div className='content'>
                <div className="content">
                    {data.content && ReactHtmlParser(data.content)}
                </div>
            </div>
        </>
    );
}

export default FullContent;