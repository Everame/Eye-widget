import React from 'react';
import {Logo, AngleRight} from '../../assets/icons';
import "./headerStart.scss";

function headerStartMenu(props) {
  return (
    <div className="headerStartMenu">
      <div className="headerStartRow">
        <div className="leftBlock">
          <img src={Logo} alt="Logo" />  
        </div>
        <div className="rightBlock">
          <a href={props.url} id="nextLink" onClick={props.next}><img src={AngleRight} alt="Next" className="menuBtn" /></a>
        </div>
      </div>  
    </div>
  )
}

export default headerStartMenu;
