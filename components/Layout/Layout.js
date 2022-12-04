import React from 'react';
import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>ELEVER</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:wght@300;400&display=swap" rel="stylesheet"></link>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
            </Head>
            <Header />
            <div className='line line-nova'>by NovaDerm</div>
            {children}
            <div className='line'></div>
            <Footer />
        </div>
    );
}

export default Layout;