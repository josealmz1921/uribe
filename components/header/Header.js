import { useEffect, useState } from 'react';
import classes from './header.module.css'
import Link from 'next/link';
import { InstagramIcon, MenuIcon } from '../Layout/Icons';
import SubMenu from '../SubMenu';
import Sidebar from '../Sidebar';

const Header = () => {

    const [visbilitiMenu, setvisbilitiMenu] = useState(false);
    const [data, setdata] = useState(null);
    const [showSidebar, setshowSidebar] = useState(false);

    useEffect(() => {

        const getData = async () => {
            const url = 'https://uribequiromasajes-dev.herokuapp.com/header';
            const query = await fetch(url);
            const response = await query.json();
            setdata(response);
        }

        getData();

    }, [])

    if (!data) return null;


    return (
        <div className={classes.root}>
            <Sidebar showSidebar={showSidebar} setshowSidebar={setshowSidebar} />
            <div className={classes.image}>
                <Link href='/'>
                    <img src={data.logo.url} alt='logo.jpg' />
                </Link>
            </div>
            <nav>
                <a onClick={() => {
                    setvisbilitiMenu(!visbilitiMenu);
                }} >Servicios</a>
                <Link href='/about-us'>
                    <a>Nosotros</a>
                </Link>
                <Link href='/reservar'>
                    <a>Reserva</a>
                </Link>
                <Link href='/contacto'>
                    <a>Contacto</a>
                </Link>
            </nav>
            <div className={classes.social}>
                <button onClick={() => setshowSidebar(true)} className={classes.buttonIconSearch}>
                    <MenuIcon classes={classes.icon} />
                </button>
                <Link href={data.url_instagram}>
                    <button className={classes.buttonIconSearch}>
                        <InstagramIcon classes={classes.icon} />
                    </button>
                </Link>

            </div>
            <SubMenu setvisbilitiMenu={setvisbilitiMenu} visbiliti={visbilitiMenu} />
        </div>
    );
}

export default Header;