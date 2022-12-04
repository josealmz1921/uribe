import { useEffect, useState } from 'react';
import classes from './submenu.module.css';
import Link from 'next/link';

const SubMenu = ({visbiliti,setvisbilitiMenu}) => {

    const [list, setlist] = useState([])

    useEffect(() => {

        const getData = async () => {
            const url = `https://uribequiromasajes-dev.herokuapp.com/services`;
            const query = await fetch(url);
            const response = await query.json();
            setlist(response);
        }

        getData();

    }, [])


    return (
        <div style={{
            opacity: visbiliti ? '1' : '0',
            top: visbiliti ? '8vh' : '-85vh' ,
        }} className={classes.root}>
            <button onClick={() => {setvisbilitiMenu(!visbiliti)}} className={classes.closeButton}> Cerrar[x] </button>
            <ul className={classes.list}>
                {list.map((item,i) => {
                    return <Link key={i} href={`/servicio/${item.url}`}>
                        <li onClick={() => {setvisbilitiMenu(!visbiliti)}}>{item.name}</li>
                    </Link>
                })}
            </ul>
        </div>
    );
}

export default SubMenu;