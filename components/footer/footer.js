import React from 'react';
import classes from './footer.module.css'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={classes.root}>
            <div className={classes['col-1']}>
                <img src='/static/img/logo.jpg' alt='img-logo.jpg' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor lectus eget odio lobortis vehicula</p>
            </div>
            <div className={classes['col-2']}>
                <p className="schedule-title">HORARIO DE ATENCIÓN</p>
                <div className="schedule-container">
                    <div className="schedule">
                        <p>LUNES - VIERNES</p>
                        <p>10 AM - 7 PM</p>
                    </div>
                    <div className="schedule">
                        <p>SÁBADOS</p>
                        <p>10 AM - 3 PM</p>
                    </div>
                </div>
            </div>
            <div className={classes['col-3']}>
                <div>
                    <Link href='/terminos-condiciones'>
                        <p>Terminos y condiciones</p>
                    </Link>
                    <Link href='/aviso-de-privacidad'>
                        <p>Aviso de privacidad</p>
                    </Link>
                    <Link href='/reservar'>
                        <p>Agendar cita</p>
                    </Link>
                </div>
            </div>
            <div className={classes['col-4']}>
                <p>Nuestros tratamientos</p>
                <div>
                    <Link href='/'>
                        <p>INICIO</p>
                    </Link>
                    <Link href='/injertos'>
                        <p>INJERTOS CAPILARES</p>
                    </Link>
                    <Link href='/fillers'>
                        <p>FILLERS</p>
                    </Link>
                    <Link href='/depilacion'>
                        <p>DEPILACION LASER</p>
                    </Link>
                    <Link href='/corporales'>
                        <p>CORPORALES</p>
                    </Link>
                    <Link href='/faciales'>
                        <p>FACIALES</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;