import React from 'react';

const Clima = ({timeData}) => {


    // extraer los valores
    const { name, main } = timeData;

    if(!name) return null;

    // Grados kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel pink accent-1 col s12 hoverable right">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { parseFloat( main.temp - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Máxima:
                    { parseFloat( main.temp_max - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Minima:
                    { parseFloat( main.temp_min - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
            </div>
        </div>
     );
}


export default Clima;