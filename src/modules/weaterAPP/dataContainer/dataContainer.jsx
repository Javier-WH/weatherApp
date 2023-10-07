import { ReactComponent as SunRise } from "./SVG/sunRise.svg";
import { ReactComponent as Sunset } from "./SVG/sunSet.svg";
import { ReactComponent as WindSpeed } from "./SVG/windSpeed.svg";
import { ReactComponent as Atmosphere } from "./SVG/atmosphere.svg"

export default function DataContainer({ sunRise, sunSet, windSpd, press }) {

    return (
        <div id="data-container">

            <div className="data-item cristal">
                <SunRise className="data-item-image" />
                <span className="data-item-text"> Sunrise: {sunRise} UTC </span>
            </div>

            <div className="data-item cristal">
                <Sunset className="data-item-image" />
                <span className="data-item-text"> Sunset: {sunSet} UTC </span>
            </div>

            <div className="data-item cristal">
                <WindSpeed className="data-item-image" />
                <span className="data-item-text"> Wind Speed: {windSpd} m/s </span>
            </div>

            <div className="data-item cristal">
                <Atmosphere className="data-item-image" />
                <span className="data-item-text"> Pressure: {press} mb </span>
            </div>


        </div>
    );


}