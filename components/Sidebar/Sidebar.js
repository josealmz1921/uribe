import { useRef,useEffect } from 'react';
import classes from './sidebar.module.css';
import Link from 'next/link';

const Sidebar = ({showSidebar,setshowSidebar}) => {

    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setshowSidebar(false);
                }
            }    
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div ref={wrapperRef} style={{ left: showSidebar ? '0' : '-100%' }} className={classes.root}>
            <Link href='/'>
                <div className={classes.item}>
                    <p>INICIO</p>
                </div>
            </Link>
            <Link href='/injertos'>
                <div className={classes.item}>
                    <p>INJERTOS CAPILARES</p>
                </div>
            </Link>
            <Link href='/fillers'>
                <div className={classes.item}>
                    <p>FILLERS</p>
                </div>
            </Link>
            <Link href='/depilacion'>
                <div className={classes.item}>
                    <p>DEPILACION LASER</p>
                </div>
            </Link>
            <Link href='/corporales'>
                <div className={classes.item}>
                    <p>CORPORALES</p>
                </div>
            </Link>
            <Link href='/faciales'>
                <div className={classes.item}>
                    <p>FACIALES</p>
                </div>
            </Link>
        </div>
    );
}

export default Sidebar;