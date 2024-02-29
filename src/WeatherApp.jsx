import { FormComponent } from "../components/FormComponent"
import { DateSection } from "../components/DateSection"
import { useState } from "react";

export const WeatherApp = () => {

    const url = 'https://api.openweathermap.org/data/2.5/weather';

    const API_key = '82c355c34da3efe36456c51b841979e0'

    const [DataClima, setDataClima] = useState(null);

    const ValorCiudad = val => {
        if (val < 1) return
        cargarData(val);
    }

    const cargarData = async (city) => {
        try {
            const response = await fetch(`${url}?q=${city}&appid=${API_key}`);
            const data = await response.json();
            setDataClima(data);
        } catch (error) {
            console.log(`error: ${error}`);
        }
    }


    return (
        <>
            <header className="flex-header">
                <h1 className="Title">Aplicacion Del Clima</h1>
                <FormComponent ingresarciudad={ValorCiudad}></FormComponent>
            </header>
            <DateSection datosClima={DataClima}></DateSection>
        </>
    )
}
