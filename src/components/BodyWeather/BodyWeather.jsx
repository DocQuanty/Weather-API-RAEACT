import React from "react";

import s from "./BodyWeather.module.scss";

export const BodyWeather = (props) => (
  <div className={s.weatherBody_wrapper}>
    {props.city && (
      <div className={s.weatherBody}>
        <h5 className={s.title_h5}>
          Погода в городе: {props.city}, Страна: {props.country}
        </h5>
        <ul>
          <li className={s.list}>Температура: {props.temp}</li>
          <li className={s.list}>Город: {props.city}</li>

          <li className={s.list}>Закат: {props.sunset}</li>
          <li className={s.list}>Давление: {props.pressure}</li>
        </ul>
      </div>
    )}
    <p className={s.error}>{props.error}</p>
  </div>
);
