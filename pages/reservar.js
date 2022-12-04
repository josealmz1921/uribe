import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { TextField, Button, Radio, RadioGroup, FormControlLabel, InputLabel, Typography } from '@material-ui/core';
import Mapa from "../components/Mapa";
import CardPresentation from '../components/CardPresentation';
import { setDate } from "date-fns";
import { CalendarIcon } from "../components/Layout/Icons";

const Reservar = () => {

    const [data, setdata] = useState({
        "Nombre": "",
        "Email": "",
        "Hora": "",
        "Tratamiento": "",
        "Fecha": "3",
        "Telefono": "",
        "__v": 0,
    })

    const handleChange = e => {
        setdata({
            ...data,
            [e.target.name]: e.target.name === 'Hora' ? e.target.value + ':00.000' : e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const validation = Object.values(data).map(item => {
            if (item === '') {
                return null
            }
            return item;
        })

        if (validation.includes(null)) {
            alert('Todos los campos son obligatorios')
            return
        }

        const url = 'https://uribequiromasajes-dev.herokuapp.com/reservaciones';
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await response.json();

        setdata({
            "Nombre": "",
            "Email": "",
            "Hora": "",
            "Tratamiento": "",
            "Fecha": "3",
            "Telefono": "",
            "__v": 0,
        })

        alert('Informacion enviada correctamente');

    }

    return (
        <Layout>
            <div className="reservation-root">
                <CardPresentation />
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-order">
                        <div>
                            <div className="inputs-reservation">
                                <div>
                                    <TextField value={data.Nombre} onChange={(e) => handleChange(e)} name="Nombre" style={{ width: '100%' }} InputLabelProps={{
                                        shrink: true,
                                        style: {
                                            fontSize: 20,
                                            fontWeight: 'bold'
                                        }
                                    }}
                                        inputProps={{
                                            style: {
                                                fontSize: 15,
                                            }
                                        }}
                                        variant="standard" label='Nombre' />
                                </div>
                            </div>
                            <InputLabel
                                style={{
                                    fontSize: 16
                                }}
                            >Tratamientos</InputLabel>
                            <RadioGroup
                                style={{
                                    paddingLeft: 40
                                }}
                                name="Tratamiento"
                                onChange={e => {
                                    setdata({
                                        ...data,
                                        "Tratamiento": e.target.value
                                    })
                                }}
                            >
                                <FormControlLabel value="Depilación laser" control={<Radio />} label={<Typography style={{ fontSize: 14 }}>Depilación laser</Typography>} />
                                <FormControlLabel value="Faciales" control={<Radio />} label={<Typography style={{ fontSize: 14 }}>Faciales</Typography>} />
                                <FormControlLabel value="Corporales" control={<Radio />} label={<Typography style={{ fontSize: 14 }}>Corporales</Typography>} />
                                <FormControlLabel value="Análisis Facial" control={<Radio />} label={<Typography style={{ fontSize: 14 }}>Análisis Facial</Typography>} />
                                <FormControlLabel value="Extension de pestañas" control={<Radio />} label={<Typography style={{ fontSize: 14 }}>Extension de pestañas</Typography>} />
                                <FormControlLabel value="Microblading" control={<Radio />} label={<Typography style={{ fontSize: 14 }}>Microblading</Typography>} />
                            </RadioGroup>
                        </div>
                        <div className="inputs-reservation">
                            <div>
                                <TextField value={data.Email} onChange={(e) => handleChange(e)} name="Email" style={{ width: '100%' }} InputLabelProps={{
                                    shrink: true,
                                    style: {
                                        fontSize: 20,
                                        fontWeight: 'bold'
                                    }
                                }}
                                    inputProps={{
                                        style: {
                                            fontSize: 15,
                                        }
                                    }}
                                    variant="standard" label='Email*' />
                            </div>
                            <div>
                                <TextField
                                    name="Hora"
                                    value={data.Hora}
                                    onChange={(e) => handleChange(e)}
                                    style={{ width: '100%' }}
                                    type='time'
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {
                                            fontSize: 20,
                                            fontWeight: 'bold'
                                        }
                                    }}
                                    inputProps={{
                                        style: {
                                            fontSize: 15,
                                        }
                                    }}
                                    variant="standard"
                                    label='Hora' />
                            </div>
                            <div>
                                <TextField
                                    name="Fecha"
                                    value={data.Fecha}
                                    onChange={(e) => handleChange(e)}
                                    style={{ width: '100%', fontSize: 25 }}
                                    type='date'
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {
                                            fontSize: 20,
                                            fontWeight: 'bold'
                                        }
                                    }}
                                    inputProps={{
                                        style: {
                                            fontSize: 15,
                                        }
                                    }}
                                    variant="standard"
                                    label='Hora' />
                            </div>
                            <div>
                                <TextField
                                    value={data.Telefono}
                                    onChange={(e) => handleChange(e)}
                                    name="Telefono"
                                    style={{ width: '100%' }}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {
                                            fontSize: 20,
                                            fontWeight: 'bold'
                                        }
                                    }}
                                    inputProps={{
                                        style: {
                                            fontSize: 15,
                                        }
                                    }}
                                    variant="standard" label='Teléfono' />
                            </div>
                        </div>
                    </div>
                    <div className="button-reservation">
                        <Button
                            type='submit'
                            style={{
                                margin: '0 auto',
                                background: '#C7BBB9',
                                color: '#FFFFFF',
                                padding: '.5rem',
                                fontSize: '1.5rem',
                                width: '15rem',
                                margin: '0 auto',
                                borderRadius: '.2rem'
                            }}
                        >ENVIAR</Button>
                    </div>
                    <div className="div-calendar-reservation"><CalendarIcon  classes='calendar-icon'/><p>Agendar cita de valoracion gratis</p></div>
                </form>
            </div>
            <Mapa />
        </Layout>
    );
}

export default Reservar;

