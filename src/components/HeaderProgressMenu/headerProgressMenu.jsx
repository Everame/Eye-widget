import React from 'react';
import {AngleLeft, Close} from '../../assets/icons';
import "./headerProgressMenu.scss";

//Компонент навигационного меню для 1-10 страницы проекта
function headerProgressMenu(props) {
  return (
    <div className="headerMenu">
      <div className="headerRow">
        <div className="leftBlock">
          <a href="/" className='prevLink' onClick={props.prev}><img src={AngleLeft} alt="Prev" className='menuBtn' data-testid={props.testID} /></a>  
        </div>
        <div className="middleBlock">
            <p className="pageNum">{props.page}/10</p>
        </div>
        <div className="rightBlock">
          <a href={props.startUrl} className="resetLink" onClick={props.reset}><img src={Close} alt="Close" className="menuBtn" data-testid={props.resetTestID} /></a>
        </div>
      </div>  
      <div className="progressBar">
          <div className="innerBar" style={{width: `${props.page * 9.6}%`}}></div>
      </div>
    </div>
  )
}

export default headerProgressMenu;