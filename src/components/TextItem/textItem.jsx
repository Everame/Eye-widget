import React from 'react';
import "./textItem.scss";

//Кнопка изменения состояния переменных на странице вида только текст в центре
function textItem(props) {
  return (
    <a href="/" className="textItem" onClick={props.action} data-testid={props.testID}>
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

export default textItem;