import React from 'react';
import "./chooseTextItem.scss";

//Кнопка выбора вида только текст в центре
function chooseTextItem(props) {
  return (
    <a href={props.url} className="chooseTextItem" id='nextLink' data-value={props.value} onClick={props.next} data-testid={props.testID}>
        <div className="itemContent">
            <div className="itemText">
                <p className="itemTitle">
                    {props.title}
                </p>
            </div>
        </div>
    </a>
  )
}

export default chooseTextItem;