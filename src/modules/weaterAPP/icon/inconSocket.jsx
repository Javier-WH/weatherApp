import GetIcon from "./icons/getIcons"

import "./icons/iconsAnimations.css"


export default function IconSocket({ iconCode, description, selectedCity, datetime, relativeHumidity }) {

    return <div id="socket-container">
        <div id="icon-container">
            <GetIcon code={iconCode} /> {/* id = weather-icon */}
            <span id="descripcion">{description}</span>
        </div>
        <div id="name-container">
            <span>{selectedCity.label}</span>
            <span>{datetime}</span>
            <span>{relativeHumidity}</span>
        </div>
    </div>
}