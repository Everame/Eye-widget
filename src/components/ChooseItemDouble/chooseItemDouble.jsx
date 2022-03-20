import React from 'react';
import "./chooseItemDouble.scss";

//Компонент кнопки выбора вида картинка, текст в одну строку
function chooseItemDouble(props) {
  return (
    <a href={props.url} className="chooseItemDouble" id='nextLink' data-value={props.value} onClick={props.next}>
        <div className="itemContent">
            <div className="itemIcon">
                <img src={props.icon} alt="Icon" />
            </div>
            <div className="itemText">
                <p className="itemTitle">
                    {props.title}
                </p>
            </div>
        </div>
    </a>
  )
}

export default chooseItemDouble;