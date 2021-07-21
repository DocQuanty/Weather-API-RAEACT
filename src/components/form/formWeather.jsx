import React from "react";

import s from "./formWeather.module.scss";

export const FormWeather = (props) => (
  <div className={s.formWrapper}>
    <form onSubmit={props.gettingWeather} action="#">
      <input className={s.input} type="text" name="city" placeholder="Город" />
      <button>Получить погоду</button>
    </form>
  </div>
);
