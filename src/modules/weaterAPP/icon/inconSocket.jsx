import GetIcon from "./icons/getIcons"

import "./icons/iconsAnimations.css"


export default function IconSocket({ iconCode, description, selectedCity, datetime, relativeHumidity, temperature }) {

    if(iconCode === null  || description === null || selectedCity === null || datetime === null || relativeHumidity === null || temperature === null){
        return
    }


    return <div id="socket-container" className="cristal">
        <div id="icon-container">
            <GetIcon code={iconCode} /> {/* id = weather-icon */}
            <span id="descripcion">{description}</span>
        </div>
        <span id="temperature">{`${temperature} °C`}</span>
        <div id="name-container">
            <span>City name: </span>
            <span>{selectedCity.label}</span>
            <span>Date:</span>
            <span>{datetime.split(":")[0]}</span>
            <span>Relative Humidity:</span>
            <span>{`${relativeHumidity}%`}</span>
        </div>
    </div>
}