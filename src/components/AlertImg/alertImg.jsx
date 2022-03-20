import React from 'react';
import "./alertImg.scss";

//Иконка используемая в анимациях
export default function alertImg(props) {
  return (
    <div className={`alertImg ${props.animation === "loading" ? "loading":"standart"}`}>
        <img src={props.icon} alt="Alert Icon" />
    </div>
  )
}
