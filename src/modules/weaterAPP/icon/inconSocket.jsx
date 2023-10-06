import GetIcon from "./icons/getIcons"

import "./icons/iconsAnimations.css"


export default function IconSocket({ iconCode, description, selectedCity, datetime, relativeHumidity, temperature }) {

    return <div id="socket-container">
        <div id="icon-container">
            <GetIcon code={iconCode} /> {/* id = weather-icon */}
            <span id="descripcion">{description}</span>
        </div>
        <span id="temperature">{`${temperature} °C`}</span>
        <div id="name-container">
            <span>City name: </span>
            <span>{selectedCity.label}</span>
            <span>Date time:</span>
            <span>{`${datetime} UTC`}</span>
            <span>Relative Humidity:</span>
            <span>{`${relativeHumidity}%`}</span>
        </div>
    </div>
}