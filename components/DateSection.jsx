
export const DateSection = ({ datosClima }) => {



    return (
        <section className="Section">
            {datosClima && (
                <div className="Flex-Div">
                    <div className="Div-img"><img src={`https://openweathermap.org/img/wn/${datosClima.weather[0].icon}@2x.png`} alt="fotoClima" /></div>
                    <div className="descripcionClima">
                        <p className="nombre">{datosClima.name}, {datosClima.sys.country}</p>
                        <div className="temperatura">temperatura:
                            <p className="temp-actual">actual: {parseInt(datosClima.main.temp - 273.15)}°C</p>
                            <p className="temp-min">min: {parseInt(datosClima.main.temp_min - 273.15)}°C</p>
                            <p className="temp-max">max: {parseInt(datosClima.main.temp_max - 273.15)}°C</p>
                        </div>
                        <p className="descripcion">descripcion: {datosClima.weather[0].description}</p>
                    </div>
                </div>
            )
            }
        </section>
    )
}
