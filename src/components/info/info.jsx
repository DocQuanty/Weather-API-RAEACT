import React from "react";

import s from "./info.module.scss";

export const Info = (props) => (
  <div className={s.wrapperInfo}>
    <div className={s.title}>
      <h5 className={s.titleMain}>Погодное приложение!</h5>
      <p className={s.underTitle}>Узнайте погоду в вашем городе!</p>
    </div>
  </div>
);
