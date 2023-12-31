import { useState, useEffect } from 'react';
import getWeatherData from './fetch/fetch';
import ComboBox from "./dropBox/comboBox";
import Alerts from './errors/alerts';
import Background from './background/background';
import IconSocket from './icon/inconSocket';
import DataContainer from './dataContainer/dataContainer';
import { APIinvalidDataError, APIConectionError } from './errors/error';

import "./weatherAPP.css";

export default function WeatherApp() {

  const [selectedCity, setSelectedCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [iconName, setIconName] = useState(null);
  const [description, setDescription] = useState(null);
  const [datetime, setDatetime] = useState(null);
  const [relativeHumidity, setRelativeHumidity] = useState(null);
  const [sunRise, setSunRise] = useState(null);
  const [sunSet, setSunSet] = useState(null);
  const [windSpd, setWindSpd] = useState(null);
  const [press, setPress] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    //must have selected a city
    if (selectedCity === null) {
      return
    }

    async function getData() {
      const { countryCode, label: city } = selectedCity;


      const data = await getWeatherData({ city, countryCode });
      if (data.error) {
        throw new APIConectionError();
      }

      //valid data must have been selected
      if (
        !(data.hasOwnProperty("temp") &&
          data.hasOwnProperty("weather") &&
          data.weather.hasOwnProperty("icon") &&
          data.weather.hasOwnProperty("description") &&
          data.hasOwnProperty("datetime") &&
          data.hasOwnProperty("rh") &&
          data.hasOwnProperty("sunrise") &&
          data.hasOwnProperty("sunset") &&
          data.hasOwnProperty("wind_spd") &&
          data.hasOwnProperty("pres"))
      ) {
        throw new APIinvalidDataError();
      }



      setTemperature(data.temp);
      setIconName(data.weather.icon);
      setDescription(data.weather.description);
      setDatetime(data.datetime);
      setRelativeHumidity(data.rh);
      setSunRise(data.sunrise);
      setSunSet(data.sunset);
      setWindSpd(data.wind_spd);
      setPress(data.pres);
    }



    getData().catch(error => {
      setError(error);
    });




  }, [selectedCity])


  return (
    <div id="weaterapp-container">
      <div id='combobox-container'>
        <ComboBox setSelectedCity={setSelectedCity} />
      </div>
      <Alerts error={error} setError={setError} />
      <Background />
      {selectedCity && (
        <>
          <IconSocket
            iconCode={iconName}
            description={description}
            selectedCity={selectedCity}
            datetime={datetime}
            relativeHumidity={relativeHumidity}
            temperature={temperature}
          />
          <DataContainer sunRise={sunRise} sunSet={sunSet} windSpd={windSpd} press={press} />
        </>
      )}
    </div>
  );

}