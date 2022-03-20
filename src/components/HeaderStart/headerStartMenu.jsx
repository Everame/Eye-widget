import React from 'react';
import {Logo, AngleRight, Close} from '../../assets/icons';
import "./headerStart.scss";

//Компонент навигационного меню для начальной и конечной страницы проекта
function headerStartMenu(props) {
  return (
    <div className="headerStartMenu">
      <div className="headerStartRow">
        <div className="leftBlock">
          <img src={Logo} alt="Logo" />  
        </div>
        <div className="rightBlock">
          <a href={props.url} id={props.type === "start" ? "nextLink" : "resetLink"} onClick={props.type === "start" ? props.next : props.reset}><img src={props.type === "start" ? AngleRight : Close} alt="Next" className="menuBtn" /></a>
        </div>
      </div>
      <div className="progressBar" style={{display: `${props.type === "start" ? "none" : "block"}`}}>
          <div className="innerBar" style={{width: `100%`}}></div>
      </div>  
    </div>
  )
}

export default headerStartMenu;
