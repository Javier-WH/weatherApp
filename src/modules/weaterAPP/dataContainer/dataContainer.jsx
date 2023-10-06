import SunRise from "./SVG/sunRise.svg";
import Sunset from "./SVG/sunSet.svg";
import WindSpeed from "./SVG/windSpeed.svg";
import Atmosphere from "./SVG/atmosphere.svg"

export default function DataContainer({ sunRise, sunSet, windSpd, press }) {

    return (
        <div id="data-container">

            <div className="data-item cristal">
                <img src={SunRise} alt="" className="data-item-image" />
                <span className="data-item-text"> Sunrise: {sunRise} UTC </span>
            </div>       

                <div className="data-item cristal">
                <img src={Sunset} alt="" className="data-item-image" />
                <span className="data-item-text"> Sunset: {sunSet} UTC </span>
            </div>  

                <div className="data-item cristal">
                <img src={WindSpeed} alt="" className="data-item-image" />
                <span className="data-item-text"> Wind Speed: {windSpd} m/s </span>
            </div>  

                <div className="data-item cristal">
                <img src={Atmosphere} alt="" className="data-item-image" />
                <span className="data-item-text"> Pressure: {press} mb </span>
            </div>       


        </div>
    );


}