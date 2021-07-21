import React from "react";

import s from "./App.module.scss";

import { FormWeather } from "./components/form/formWeather";
import { Info } from "./components/info/info";
import { BodyWeather } from "./components/BodyWeather/BodyWeather";

const API_KEY = "186e32c0d9219e7c2631ff1a844047ab";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    var cityName = e.target.elements.city.value;

    if (cityName) {
      const API_URL = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      const data = await API_URL.json();

      // ======date sunset
      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      // ======setState
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,

        sunset: sunset_date,
        error: undefined,
      });
      console.log(data);
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города!",
      });
    }
  };
  render() {
    return (
      <div className={s.wrapper_app}>
        <div className={s.rows}>
          <div className={s.row}>
            <Info />
          </div>

          <div className={s.row}>
            <FormWeather gettingWeather={this.gettingWeather} />
            <BodyWeather
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
